var Web3= require("web3"); //添加以太坊web3.js支持
var contract = require("truffle-contract"); //对node或浏览器端来说，更佳的以太坊合约抽象


//本地Ganache节点支持
var provider = new Web3.providers.HttpProvider("http://139.180.216.81:8545");

var Registery = contract(require("./build/contracts/MarmotToken.json"));
Registery.setProvider(provider);//合约提供注册
Registery.setNetwork('*');//rpcport


Registery.deployed().then( async (instance) => {
    var symbol = await instance.symbol();
    var name = await instance.name();
    var decimals = await instance.decimals();
    var totalSupply = await instance.totalSupply();
    return {
        name: name, symbol: symbol,decimals:decimals,totalSupply:totalSupply
    };
}).then(function (result) {console.info('result:' + JSON.stringify(result));});