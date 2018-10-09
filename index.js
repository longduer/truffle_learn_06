var batchTool = require('./batchTool');
var Web3 = require("web3");
var web3 = new Web3();

batchTool.init({
    senderAddress: "0xeb680f30715f347d4eb5cd03ac5eced297ac5046",
    privateKey: "526e8873ef9f71d72c06fad033770777da9914239996351e6206060a47c456cc",
    IONCBatchAddress:"0xe0c2db241f3d3647086e29402a772895975c5064",
    provider: "http://192.168.23.71:8545"
});

// 这个方法只需要执行一次，执行完后将这个方法注释
//transfer.approve(0)
//transfer.approve(5);


batchTool.batchTransfer(['0x00c20ac18107bf0ffa66c857f682150fc797efcd'], web3.toWei(1, "ether"));