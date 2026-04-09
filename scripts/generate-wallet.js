const { ethers } = require('ethers');

// Generate a new random wallet
const wallet = ethers.Wallet.createRandom();

console.log('\n🎉 NEW DEPLOYER WALLET CREATED\n');
console.log('='.repeat(60));
console.log('Address:     ', wallet.address);
console.log('Private Key: ', wallet.privateKey);
console.log('Mnemonic:    ', wallet.mnemonic.phrase);
console.log('='.repeat(60));
console.log('\n⚠️  IMPORTANT:');
console.log('1. Save this private key securely (it will be added to .env.local)');
console.log('2. Send Base Sepolia ETH to this address for gas');
console.log('3. Send Base Sepolia LINK to this address for VRF subscription');
console.log('\nFaucets:');
console.log('• ETH:  https://www.alchemy.com/faucets/base-sepolia');
console.log('• LINK: https://faucets.chain.link/base-sepolia');
console.log('');
