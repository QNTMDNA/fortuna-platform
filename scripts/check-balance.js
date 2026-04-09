const { ethers } = require('ethers');
require('dotenv').config({ path: '.env.local' });

const RPC_URL = 'https://sepolia.base.org';
const provider = new ethers.JsonRpcProvider(RPC_URL);

async function checkBalance() {
  const privateKey = process.env.DEPLOYER_PRIVATE_KEY;
  
  if (!privateKey) {
    console.error('❌ DEPLOYER_PRIVATE_KEY not found in .env.local');
    process.exit(1);
  }

  const wallet = new ethers.Wallet(privateKey, provider);
  
  console.log('\n💼 WALLET INFO');
  console.log('='.repeat(60));
  console.log('Address:', wallet.address);
  
  const ethBalance = await provider.getBalance(wallet.address);
  const ethBalanceFormatted = ethers.formatEther(ethBalance);
  
  console.log('ETH Balance:', ethBalanceFormatted, 'ETH');
  
  // Check LINK balance (Base Sepolia LINK: 0xE4aB69C077896252FAFBD49EFD26B5D171A32410)
  const LINK_ADDRESS = '0xE4aB69C077896252FAFBD49EFD26B5D171A32410';
  const linkAbi = ['function balanceOf(address) view returns (uint256)'];
  const linkContract = new ethers.Contract(LINK_ADDRESS, linkAbi, provider);
  
  const linkBalance = await linkContract.balanceOf(wallet.address);
  const linkBalanceFormatted = ethers.formatEther(linkBalance);
  
  console.log('LINK Balance:', linkBalanceFormatted, 'LINK');
  console.log('='.repeat(60));
  
  // Check if ready for deployment
  const hasEnoughEth = parseFloat(ethBalanceFormatted) >= 0.005;
  const hasEnoughLink = parseFloat(linkBalanceFormatted) >= 0.5;
  
  console.log('\n📋 DEPLOYMENT READINESS');
  console.log('ETH (≥0.005):', hasEnoughEth ? '✅' : '❌ Need more ETH');
  console.log('LINK (≥0.5):', hasEnoughLink ? '✅' : '❌ Need more LINK');
  
  if (hasEnoughEth && hasEnoughLink) {
    console.log('\n🚀 Ready for deployment!');
  } else {
    console.log('\n⚠️  Need to fund wallet before deployment');
    console.log('\nFaucets:');
    console.log('• ETH:  https://www.alchemy.com/faucets/base-sepolia');
    console.log('• LINK: https://faucets.chain.link/base-sepolia');
    console.log('\nSend to:', wallet.address);
  }
  console.log('');
}

checkBalance().catch(console.error);
