const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate('8552e98a070f2877765217129228ccae95ecf65a536815e4f422a545a329f564');
const myWalletAddress = myKey.getPublic('hex');

let bebaCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
bebaCoin.addTransaction(tx1);



console.log('/n Starting the miner...');
bebaCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', bebaCoin.getBalanceOfAddress(myWalletAddress));


