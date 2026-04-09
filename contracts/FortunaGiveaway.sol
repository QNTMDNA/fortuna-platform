// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/vrf/interfaces/VRFCoordinatorV2Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title FortunaGiveaway
 * @notice On-chain charitable giveaway platform with provably fair winner selection
 * @dev Uses Chainlink VRF for randomness, supports multiple causes and prize types
 */
contract FortunaGiveaway is VRFConsumerBaseV2, Ownable, ReentrancyGuard {
    // Chainlink VRF
    VRFCoordinatorV2Interface private immutable vrfCoordinator;
    uint64 private immutable subscriptionId;
    bytes32 private immutable keyHash;
    uint32 private constant CALLBACK_GAS_LIMIT = 500000;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;

    // Platform fee (in basis points, 1000 = 10%)
    uint256 public platformFeePercent = 1000; // 10%
    address public feeRecipient;

    // Cause struct
    struct Cause {
        string name;
        string description;
        address payable beneficiary;
        uint256 entryPrice;
        uint256 totalDonated;
        uint256 totalEntries;
        uint256 drawTime;
        bool active;
        bool drawn;
        address winner;
        PrizeType prizeType;
        uint256 prizeAmount; // For 50/50 or fixed prize
    }

    enum PrizeType {
        FIFTY_FIFTY,    // Winner gets 50% of pool
        FIXED_PRIZE,    // Winner gets fixed amount
        DONATED_PRIZE   // All funds to charity, prize donated externally
    }

    // Storage
    mapping(uint256 => Cause) public causes;
    mapping(uint256 => address[]) public entries;
    mapping(uint256 => uint256) private vrfRequestToCause;
    uint256 public causeCount;

    // Events
    event CauseCreated(
        uint256 indexed causeId,
        string name,
        address beneficiary,
        uint256 entryPrice,
        uint256 drawTime,
        PrizeType prizeType
    );
    
    event DonationReceived(
        uint256 indexed causeId,
        address indexed donor,
        uint256 amount,
        uint256 entries
    );
    
    event DrawRequested(uint256 indexed causeId, uint256 requestId);
    
    event WinnerSelected(
        uint256 indexed causeId,
        address indexed winner,
        uint256 prizeAmount
    );
    
    event CharityPaid(
        uint256 indexed causeId,
        address beneficiary,
        uint256 amount
    );

    /**
     * @notice Constructor
     * @param _vrfCoordinator Chainlink VRF Coordinator address (Base Sepolia)
     * @param _subscriptionId Chainlink VRF subscription ID
     * @param _keyHash Chainlink VRF key hash
     * @param _feeRecipient Address to receive platform fees
     */
    constructor(
        address _vrfCoordinator,
        uint64 _subscriptionId,
        bytes32 _keyHash,
        address _feeRecipient
    ) VRFConsumerBaseV2(_vrfCoordinator) Ownable(msg.sender) {
        vrfCoordinator = VRFCoordinatorV2Interface(_vrfCoordinator);
        subscriptionId = _subscriptionId;
        keyHash = _keyHash;
        feeRecipient = _feeRecipient;
    }

    /**
     * @notice Create a new cause
     * @param _name Cause name
     * @param _description Cause description
     * @param _beneficiary Charity address to receive funds
     * @param _entryPrice Minimum donation per entry (in wei)
     * @param _drawTime Unix timestamp when draw can be triggered
     * @param _prizeType Type of prize (50/50, fixed, donated)
     * @param _prizeAmount Prize amount (for fixed prize type, 0 otherwise)
     */
    function createCause(
        string memory _name,
        string memory _description,
        address payable _beneficiary,
        uint256 _entryPrice,
        uint256 _drawTime,
        PrizeType _prizeType,
        uint256 _prizeAmount
    ) external onlyOwner {
        require(_beneficiary != address(0), "Invalid beneficiary");
        require(_entryPrice > 0, "Entry price must be > 0");
        require(_drawTime > block.timestamp, "Draw time must be future");

        uint256 causeId = causeCount++;
        
        causes[causeId] = Cause({
            name: _name,
            description: _description,
            beneficiary: _beneficiary,
            entryPrice: _entryPrice,
            totalDonated: 0,
            totalEntries: 0,
            drawTime: _drawTime,
            active: true,
            drawn: false,
            winner: address(0),
            prizeType: _prizeType,
            prizeAmount: _prizeAmount
        });

        emit CauseCreated(causeId, _name, _beneficiary, _entryPrice, _drawTime, _prizeType);
    }

    /**
     * @notice Donate to a cause and receive entries
     * @param causeId ID of the cause
     */
    function donate(uint256 causeId) external payable nonReentrant {
        Cause storage cause = causes[causeId];
        
        require(cause.active, "Cause not active");
        require(!cause.drawn, "Draw already completed");
        require(block.timestamp < cause.drawTime, "Donation period ended");
        require(msg.value >= cause.entryPrice, "Insufficient donation");

        // Calculate entries (1 entry per entryPrice)
        uint256 numEntries = msg.value / cause.entryPrice;
        require(numEntries > 0, "Donation too small");

        // Update cause
        cause.totalDonated += msg.value;
        cause.totalEntries += numEntries;

        // Add entries
        for (uint256 i = 0; i < numEntries; i++) {
            entries[causeId].push(msg.sender);
        }

        emit DonationReceived(causeId, msg.sender, msg.value, numEntries);
    }

    /**
     * @notice Request random winner selection via Chainlink VRF
     * @param causeId ID of the cause
     */
    function requestDraw(uint256 causeId) external nonReentrant {
        Cause storage cause = causes[causeId];
        
        require(cause.active, "Cause not active");
        require(!cause.drawn, "Already drawn");
        require(block.timestamp >= cause.drawTime, "Draw time not reached");
        require(cause.totalEntries > 0, "No entries");

        // Request randomness
        uint256 requestId = vrfCoordinator.requestRandomWords(
            keyHash,
            subscriptionId,
            REQUEST_CONFIRMATIONS,
            CALLBACK_GAS_LIMIT,
            NUM_WORDS
        );

        vrfRequestToCause[requestId] = causeId;
        cause.drawn = true;

        emit DrawRequested(causeId, requestId);
    }

    /**
     * @notice Chainlink VRF callback with random number
     * @param requestId VRF request ID
     * @param randomWords Array of random numbers
     */
    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        uint256 causeId = vrfRequestToCause[requestId];
        Cause storage cause = causes[causeId];

        // Select winner
        uint256 winnerIndex = randomWords[0] % cause.totalEntries;
        address winner = entries[causeId][winnerIndex];
        cause.winner = winner;

        // Calculate distributions
        uint256 platformFee = (cause.totalDonated * platformFeePercent) / 10000;
        uint256 remainingFunds = cause.totalDonated - platformFee;

        uint256 prizeAmount;
        uint256 charityAmount;

        if (cause.prizeType == PrizeType.FIFTY_FIFTY) {
            // 50/50 split of remaining funds (after platform fee)
            prizeAmount = remainingFunds / 2;
            charityAmount = remainingFunds - prizeAmount;
        } else if (cause.prizeType == PrizeType.FIXED_PRIZE) {
            // Fixed prize amount, rest to charity
            prizeAmount = cause.prizeAmount;
            charityAmount = remainingFunds - prizeAmount;
        } else {
            // DONATED_PRIZE: All funds to charity
            prizeAmount = 0;
            charityAmount = remainingFunds;
        }

        // Transfer platform fee
        (bool feeSuccess, ) = feeRecipient.call{value: platformFee}("");
        require(feeSuccess, "Fee transfer failed");

        // Transfer charity funds
        (bool charitySuccess, ) = cause.beneficiary.call{value: charityAmount}("");
        require(charitySuccess, "Charity transfer failed");
        emit CharityPaid(causeId, cause.beneficiary, charityAmount);

        // Transfer prize to winner (if applicable)
        if (prizeAmount > 0) {
            (bool prizeSuccess, ) = payable(winner).call{value: prizeAmount}("");
            require(prizeSuccess, "Prize transfer failed");
        }

        emit WinnerSelected(causeId, winner, prizeAmount);
    }

    /**
     * @notice Update platform fee percentage
     * @param _newFee New fee in basis points (1000 = 10%)
     */
    function setPlatformFee(uint256 _newFee) external onlyOwner {
        require(_newFee <= 2000, "Fee too high (max 20%)");
        platformFeePercent = _newFee;
    }

    /**
     * @notice Update fee recipient address
     * @param _newRecipient New fee recipient address
     */
    function setFeeRecipient(address _newRecipient) external onlyOwner {
        require(_newRecipient != address(0), "Invalid address");
        feeRecipient = _newRecipient;
    }

    /**
     * @notice Toggle cause active status
     * @param causeId ID of the cause
     */
    function toggleCauseActive(uint256 causeId) external onlyOwner {
        causes[causeId].active = !causes[causeId].active;
    }

    /**
     * @notice Get all entries for a cause
     * @param causeId ID of the cause
     * @return Array of entry addresses
     */
    function getEntries(uint256 causeId) external view returns (address[] memory) {
        return entries[causeId];
    }

    /**
     * @notice Get cause details
     * @param causeId ID of the cause
     * @return Cause struct
     */
    function getCause(uint256 causeId) external view returns (Cause memory) {
        return causes[causeId];
    }

    /**
     * @notice Emergency withdraw (owner only, for stuck funds)
     */
    function emergencyWithdraw() external onlyOwner {
        (bool success, ) = owner().call{value: address(this).balance}("");
        require(success, "Withdrawal failed");
    }
}
