var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "orange apple banana ... ";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks:{
        development: {
            host: "192.168.23.71",
            port:"8545",
            gas: 4712388,
            network_id: "1",
            from: "0x7a261075c737163ae2525f271717f3dbf5450b8c"
        },
        host: {
            host: "127.0.0.1",
            port:"8545",
            gas: 3141592,
            network_id: "1",
            from: "0xdea825c0def278980d84e71bb486fec557e31ee8"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/JOEnl84Gm76oX0RMUrJB")
            },
            network_id: 3
        },
        mainnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/JOEnl84Gm76oX0RMUrJB ")
            },
            network_id: 3
        }
    }
};