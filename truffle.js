var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "cost faint robot enroll route call exclude wrong envelope plug enter wear";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks:{
        dev: {
            host: "192.168.23.101",
            port:"8545",
            gas: 4712388,
            network_id: "*",
            from: "0xb5c1d2730301e4cbc568b5a04367f867f26f4345"
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
        },
        ioncnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "http://66.42.61.229:8545")
            },
            network_id:"*",
            gas:4712388
        }
    }
};