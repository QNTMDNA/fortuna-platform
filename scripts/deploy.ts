import { ethers } from "hardhat";

/**
 * Chainlink VRF Coordinator addresses
 * Base Sepolia: 0xd5D517aBE5cF79B7e95eC98dB0f0277788aFF634
 * Base Mainnet: 0xd5D517aBE5cF79B7e95eC98dB0f0277788aFF634
 */

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  // Base Sepolia VRF config
  const VRF_COORDINATOR = "0xd5D517aBE5cF79B7e95eC98dB0f0277788aFF634";
  const SUBSCRIPTION_ID = process.env.VRF_SUBSCRIPTION_ID || "0"; // Get from Chainlink VRF dashboard
  const KEY_HASH = "0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae"; // Base Sepolia 500 gwei
  const FEE_RECIPIENT = deployer.address; // Change this to platform wallet

  console.log("\nDeployment Parameters:");
  console.log("VRF Coordinator:", VRF_COORDINATOR);
  console.log("Subscription ID:", SUBSCRIPTION_ID);
  console.log("Key Hash:", KEY_HASH);
  console.log("Fee Recipient:", FEE_RECIPIENT);

  // Deploy FortunaGiveaway
  console.log("\nDeploying FortunaGiveaway...");
  const FortunaGiveaway = await ethers.getContractFactory("FortunaGiveaway");
  const fortunaGiveaway = await FortunaGiveaway.deploy(
    VRF_COORDINATOR,
    SUBSCRIPTION_ID,
    KEY_HASH,
    FEE_RECIPIENT
  );

  await fortunaGiveaway.waitForDeployment();
  const address = await fortunaGiveaway.getAddress();

  console.log("FortunaGiveaway deployed to:", address);

  // Save deployment info
  const deploymentInfo = {
    network: (await ethers.provider.getNetwork()).name,
    contractAddress: address,
    deployer: deployer.address,
    vrfCoordinator: VRF_COORDINATOR,
    subscriptionId: SUBSCRIPTION_ID,
    keyHash: KEY_HASH,
    feeRecipient: FEE_RECIPIENT,
    timestamp: new Date().toISOString(),
  };

  console.log("\nDeployment Info:");
  console.log(JSON.stringify(deploymentInfo, null, 2));

  console.log("\n⚠️  IMPORTANT: Add this contract as a consumer to your Chainlink VRF subscription!");
  console.log("Visit: https://vrf.chain.link/base-sepolia");
  console.log("Contract address to add:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
