require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food shoulder repeat pitch pulp gown light army gesture'; 
let testAccounts = [
"0xff49f6158ed911a2c6b54d0f4d32eeb6a712596b5e908de01f7e60d51d4d7366",
"0x17eedb4679e4b8a155a898aae4a7a7c80bacfdf3173fd031eee53452295a8ff7",
"0x63a9ed8ff3fa3b1423839cb7ff0e215a6eada722faaf75d05c492ebd690623c7",
"0x5fbc476a110218bf751e30b3e5f7945e53eef78ab656a214abc1f092eef5dec6",
"0xce1c6769a397a0a669b2dae698200ed5ba54d2730f8fb5e7397c694c14355036",
"0x32562fef00bf54346169ddda43f0e1ded6b985a40088232ffbbcb31eb4845b07",
"0xa7e8625b2f30088f1a44589779c478fa9087c3212a9c144402d3e72617cb7a94",
"0x7c46a5369b107c98c58ddc413bcd55c7713e977ea248870ef0d4298b79be6e53",
"0xcb441552fc245164d311299091bef76f7d82f7c5996a088defc620258971db21",
"0x9171c2a4875e9f3d58b29d0acecfd871c96ad615684003950e0b7f754a0a9b41"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
