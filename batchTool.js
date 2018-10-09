var contract = require("truffle-contract");

var IONCBatchData = require("./build/contracts/Multiplexer.json");
var IONCBatch = contract(IONCBatchData);

var Web3 = require("web3");
var web3 = new Web3();


var WalletProvider = require('truffle-wallet-provider');
var provider;

var IONCBatchAddress = "0x0e699edaf99db788ae6bacc701fbb077da369027";
var IONCBatchInstance;

var senderAddress;

async function getIONCBatchInstance() {
    IONCBatchInstance = await
        IONCBatch.at(IONCBatchAddress);
}


async function batchTransfer(receives, amounts) {
    await getIONCBatchInstance();

    await IONCBatchInstance.sendEth(receives, amounts,
        {
            value:web3.toWei(55,'ether'),
            from: senderAddress,
            gas: 3141592,
            gasPrice: web3.toWei(10,'gwei')
        }
    ).then(function (tx) {
        console.info(JSON.stringify(tx));
        //var balance = web3.eth.getBalance("0x07cbd84112880565bb9c5fa7237f7923af1c6e2f");
        //console.log(balance.toString(10)); // '1000000000000'
    }).catch(function(e) {
        // There was an error! Handle it.
        console.log(e);
    });
}


function init(info) {
    web3.setProvider(new Web3.providers.HttpProvider(info.provider));
    provider = new WalletProvider(info.privateKey, info.provider);

    senderAddress = info.senderAddress;

    IONCBatchAddress = info.IONCBatchAddress;

    IONCBatch.setProvider(provider);
}

exports.init = init;
exports.batchTransfer = batchTransfer;