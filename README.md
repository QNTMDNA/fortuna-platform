# Fortuna — On-Chain Gamified Philanthropy

The world's first on-chain charitable giving platform. Every donation is transparent, every draw is verifiably fair, and every cause is governed by smart contract, not institutional trust.

## 🚀 Launch Date: May 1, 2026

---

## Features

- **Token-Agnostic Donations**: Accept ETH, USDC, and more (multi-chain support coming)
- **Provably Fair Draws**: Chainlink VRF ensures random, tamper-proof winner selection
- **100% Transparent**: All transactions on-chain, fully auditable
- **Multiple Prize Types**: 50/50 draws, fixed prizes, donated prizes
- **Smart Contract Security**: No human can touch donated funds

---

## Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **RainbowKit** (wallet connection)
- **Wagmi + Viem** (web3 hooks)

### Smart Contracts
- **Solidity 0.8.20**
- **Hardhat** (development)
- **OpenZeppelin** (security standards)
- **Chainlink VRF** (provably fair randomness)

### Blockchain
- **Base** (Ethereum L2)
- **Base Sepolia** (testnet)

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm/npm/yarn
- MetaMask or Coinbase Wallet

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Get WalletConnect Project ID
# Visit: https://cloud.walletconnect.com/

# Update .env.local with your keys
```

### Development

```bash
# Start Next.js dev server
npm run dev

# Visit http://localhost:3000
```

### Smart Contract Development

```bash
# Compile contracts
npm run compile

# Run tests
npm run test

# Deploy to Base Sepolia
npm run deploy:testnet

# Deploy to Base Mainnet
npm run deploy:mainnet
```

---

## Chainlink VRF Setup (Required for Draws)

1. Visit [Chainlink VRF](https://vrf.chain.link/base-sepolia)
2. Create a new subscription
3. Fund it with LINK tokens
4. Deploy the contract
5. Add deployed contract as a consumer
6. Update `VRF_SUBSCRIPTION_ID` in `.env`

**Base Sepolia VRF Coordinator:**  
`0xd5D517aBE5cF79B7e95eC98dB0f0277788aFF634`

**Key Hash (500 gwei):**  
`0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae`

---

## Smart Contract Architecture

### FortunaGiveaway.sol

Main contract managing causes, donations, and draws.

**Key Functions:**

- `createCause()` - Admin creates new charitable cause
- `donate(causeId)` - User donates and receives entries
- `requestDraw(causeId)` - Trigger VRF randomness for winner selection
- `fulfillRandomWords()` - Chainlink VRF callback, selects winner and distributes funds

**Prize Types:**

1. **50/50 Draw**: Winner gets 50% of pool (after platform fee)
2. **Fixed Prize**: Winner gets fixed amount, rest to charity
3. **Donated Prize**: All funds to charity, prize donated externally

---

## Deployment Checklist

### Pre-Launch

- [ ] Get WalletConnect Project ID
- [ ] Set up Chainlink VRF subscription
- [ ] Fund VRF subscription with LINK
- [ ] Deploy contract to Base Sepolia
- [ ] Add contract as VRF consumer
- [ ] Test full donation flow
- [ ] Create 3 initial causes
- [ ] Set up Supabase (database)
- [ ] Connect domain (givefortuna.io)
- [ ] Deploy to Vercel

### Launch Day (May 1)

- [ ] Deploy to Base Mainnet
- [ ] Verify contract on Basescan
- [ ] Create first 3 live causes
- [ ] Announce on Twitter/Telegram
- [ ] Press release to crypto media
- [ ] Monitor transactions

### Post-Launch

- [ ] Apply for Base Builder Grants (retroactive)
- [ ] Add more causes
- [ ] Complete first draw
- [ ] Gather user feedback
- [ ] Iterate on UX

---

## Security

- ✅ **ReentrancyGuard** on all payable functions
- ✅ **Ownable** for admin functions
- ✅ **Chainlink VRF** for provably fair randomness
- ✅ **OpenZeppelin** battle-tested contracts
- ⚠️ **Audit planned** before mainnet launch

---

## Business Model

**Platform Fee:** 10% of donations (adjustable via governance)

**Revenue Split:**
- 50% to $FORT stakers (future)
- 30% to charity matching fund
- 20% to operations

---

## Roadmap

### Phase 1 (May 1 - Launch)
- ✅ Base deployment (ETH + USDC)
- ✅ First 3 causes live
- ✅ Provably fair draws
- ✅ Basic analytics

### Phase 2 (June - Multi-Chain)
- Add Optimism
- Add Arbitrum
- Cross-chain bridge (LayerZero)
- Apply for grants (Optimism RetroPGF, Arbitrum Foundation)

### Phase 3 (Q3 - Token Launch)
- $FORT token launch (Binance Alpha)
- Staking rewards
- Governance (DAO)
- Fee discounts for $FORT holders

### Phase 4 (Q4 - Scale)
- Polygon zkEVM
- Solana (non-EVM)
- Mobile app
- 100+ verified causes

---

## Contributing

We welcome contributions! Please:

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## License

MIT License

---

## Contact

- **Website:** givefortuna.io
- **Twitter:** @givefortuna
- **Telegram:** t.me/fortunaofficial
- **Discord:** discord.gg/fortuna

---

## Grants Applied

- [ ] Base Builder Grants (retroactive, after launch)
- [ ] Optimism RetroPGF (June 2026)
- [ ] Arbitrum Foundation Grants (July 2026)
- [ ] Polygon Community Grants (Q3 2026)

---

**Built with ❤️ for transparent, gamified giving.**
