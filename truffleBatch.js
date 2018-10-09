var Web3= require("web3"); //添加以太坊web3.js支持
var contract = require("truffle-contract"); //对node或浏览器端来说，更佳的以太坊合约抽象

//初始化web3
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    //我本地的私有链信息
    //启用命令：> geth --networkid 1108 --nodiscover --datadir ./ --rpc --rpcapi net,eth,web3,personal --rpcaddr 127.0.0.1 --rpcport 8545 console
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

var coinbase = web3.eth.coinbase;
console.info(coinbase);
//本地Ganache节点支持
var provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
//源MetaCoin合约
var Registery = contract(require("./build/contracts/batchIonc.json"));
Registery.setProvider(provider);//合约提供注册
Registery.setNetwork('*');//rpcport
//
//
var contractInstance;
Registery.deployed().then(function (instance) {
    contractInstance = instance;
    return contractInstance.batchTransfer(["0x00c20ac18107bf0ffa66c857f682150fc797efcd"],
        web3.toWei(1,'ether'), {from:'0xdea825c0def278980d84e71bb486fec557e31ee8',
        gas: 3141592,
        gasPrice: web3.toWei(1,'gwei')});
}).then(function (result) {
    console.info("result: " + JSON.stringify(result));
}).catch(function (e) {
    console.info(e);
});