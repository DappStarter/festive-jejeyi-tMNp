require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note praise pull grace slender equal gauge'; 
let testAccounts = [
"0xa371b4e77584cf89229261f66bd7945101bc74833efe40b7136fdd8869f6d3e7",
"0xbbad04d92ca778f5e0a0c48f09be634f180188fba57fe225614096c4fc2790f2",
"0xcdf2c7d31f5d7ac31dbd0c1a6eae8d94981502f0831a4af25102588cac833097",
"0x1997aef52f9c969b47e73d8a5a5ed5e0019ae3a3632c6395b3d1c974736c2db8",
"0x8ecb2330d74e1d521a4258635d30cbd51a6a84d17b20533b792b9eb335c1e7df",
"0xffcc1e2b334fc461079077eda95395dcab2604233e186190f98ed22e3af23d82",
"0xaa3521962d61b28d4f203493a615e11f7d1ed47b142c2231a3b2c95163dd57c7",
"0x191240bb5a38c9c6633c625a7e484a2219d7f3d25afd4569017d7e151fb3622b",
"0x97d78e2044739b45515c66d1f6c743c8c775a071348bb44c3475006603536c7a",
"0x18bb7aea6b141682bd568592a2331e3820660fb9bfdf7a51e541a815089d9085"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

