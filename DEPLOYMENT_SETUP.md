# Fortuna Deployment Setup — Step-by-Step

**Goal:** Deploy Fortuna smart contract and connect admin dashboard

**Time:** 40 minutes (one-time setup)

---

## 5 REQUIRED ITEMS

### ✅ 1. WalletConnect Project ID

**What:** API key for wallet connection (RainbowKit)

**Get it:**
1. Go to: https://cloud.walletconnect.com/
2. Sign up (free)
3. Create new project (name: "Fortuna")
4. Copy the **Project ID**

**Example:** `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

---

### ✅ 2. Testnet Funds (ETH + LINK)

**What:** Gas fees for deployment + Chainlink VRF

**Get Base Sepolia ETH:**
1. Visit faucet: https://www.alchemy.com/faucets/base-sepolia
2. Enter your wallet address
3. Request 0.1 ETH

**Alternative faucets:**
- https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet
- https://basescan.org/faucet

**Get Base Sepolia LINK:**
1. Visit: https://faucets.chain.link/base-sepolia
2. Connect wallet
3. Request LINK tokens (need 5 LINK for VRF subscription)

---

### ✅ 3. Chainlink VRF Subscription

**What:** Subscription for provably fair randomness

**Set it up:**
1. Go to: https://vrf.chain.link/base-sepolia
2. Connect wallet
3. Click "Create Subscription"
4. Fund subscription with 5 LINK
5. Copy **Subscription ID** (e.g., `12345`)

**Note:** You'll add the deployed contract as a consumer (Step 2)

---

### ✅ 4. Basescan API Key

**What:** Verify contract on Basescan (optional but recommended)

**Get it:**
1. Go to: https://basescan.org/myapikey
2. Sign up (free)
3. Create new API key (name: "Fortuna")
4. Copy the key

**Example:** `ABC123DEF456GHI789`

---

### ✅ 5. Deployer Wallet Private Key

**What:** Wallet that will deploy the contract

**Get it:**
1. Open MetaMask
2. Click account menu → Account Details → Show Private Key
3. Enter password
4. Copy private key

**⚠️ SECURITY:**
- Use a fresh wallet (not your main one)
- Only put testnet funds in it
- Never share the private key

---

## QUICK CHECKLIST

Copy these values when you get them:

```bash
# 1. WalletConnect Project ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="[YOUR_PROJECT_ID]"

# 2. Chainlink VRF Subscription ID (after creating subscription)
VRF_SUBSCRIPTION_ID="[YOUR_SUBSCRIPTION_ID]"

# 3. Basescan API Key
BASESCAN_API_KEY="[YOUR_API_KEY]"

# 4. Deployer Wallet Private Key
PRIVATE_KEY="[YOUR_PRIVATE_KEY]"

# 5. Contract Address (after deployment)
NEXT_PUBLIC_CONTRACT_ADDRESS="[DEPLOYED_ADDRESS]"
```

---

## STEP 1: GET WALLETCONNECT PROJECT ID (2 min)

**Action:**
1. Visit: https://cloud.walletconnect.com/sign-up
2. Create account
3. Create project: "Fortuna"
4. Copy Project ID

**Paste here when done:**
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID="________________"
```

---

## STEP 2: GET TESTNET FUNDS (5 min)

**Action:**
1. Base Sepolia ETH: https://www.alchemy.com/faucets/base-sepolia
2. Base Sepolia LINK: https://faucets.chain.link/base-sepolia

**Your wallet address:** (from MetaMask)
```
Your address: 0x________________
```

**Confirm when received:**
- [ ] 0.1 ETH received
- [ ] 5 LINK received

---

## STEP 3: CREATE VRF SUBSCRIPTION (3 min)

**Action:**
1. Visit: https://vrf.chain.link/base-sepolia
2. Connect wallet
3. Create subscription
4. Fund with 5 LINK

**Paste Subscription ID:**
```
VRF_SUBSCRIPTION_ID="________________"
```

---

## STEP 4: GET BASESCAN API KEY (2 min)

**Action:**
1. Visit: https://basescan.org/myapikey
2. Sign up
3. Create API key: "Fortuna"

**Paste here:**
```
BASESCAN_API_KEY="________________"
```

---

## STEP 5: GET DEPLOYER PRIVATE KEY (1 min)

**Action:**
1. MetaMask → Account Details → Show Private Key
2. Copy key

**⚠️ Use a FRESH wallet (not your main one!)**

**Paste here:**
```
PRIVATE_KEY="________________"
```

---

## ONCE YOU HAVE ALL 5 ITEMS

**Tell me "ready to deploy" and paste the values above.**

I'll:
1. Update `.env` with your keys
2. Deploy smart contract to Base Sepolia
3. Add contract as VRF consumer
4. Test donation flow
5. Connect admin dashboard
6. Deploy frontend to Vercel

**Total time:** 2 hours (mostly automated)

---

## AFTER DEPLOYMENT

You'll have:
- ✅ Smart contract deployed on Base Sepolia
- ✅ Admin dashboard connected (create causes, manage draws)
- ✅ Working donation flow (ETH + USDC)
- ✅ Provably fair draws via Chainlink VRF
- ✅ Frontend live at givefortuna.vercel.app

Then we can:
- Create first 3 test causes
- Run a full donation → draw → payout cycle
- Demo to Make-A-Wish
- Launch on May 1

---

**START HERE:**

**Step 1: Get WalletConnect Project ID**

Go to: https://cloud.walletconnect.com/sign-up

Tell me when you have it! 🚀
