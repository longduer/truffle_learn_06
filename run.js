var Web3 = require("web3"); //引入web3支持，我本地使用的是web3^0.18.4
var Tx = require("ethereumjs-tx"); //引入以太坊js交易支持
var accountTool = require('./service/newAccountTool');


//初始化web3
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    //我本地的私有链信息
    //启用命令：> geth --networkid 1108 --nodiscover --datadir ./ --rpc --rpcapi net,eth,web3,personal --rpcaddr 127.0.0.1 --rpcport 8545 console
    web3 = new Web3(new Web3.providers.HttpProvider("http://172.16.10.86:8545"));
}

accountTool.getAccounts(100,2,function (err, result) {
    var length = result.length;
    console.info('length: ' + length);
    for (var i = 1; i < length; i++) {

        //交易接收者
        var toAddress = result[i - 1].public_key;

        //console.info(result[i].private_key.toString().substring(2));
        //交易发送者
        var privateKey = Buffer.from(result[i].private_key.toString().substring(2),'hex');
        var fromAddress = result[i].public_key;

        var number = web3.eth.getTransactionCount(fromAddress);
        //通过交易参数
        var rawTx = {
            nonce: number,//交易数
            gasPrice: '0x3b9aca00',//gas价格
            gasLimit: '0x3d0900',
            to: toAddress,//转账到哪个账户
            value: web3.toHex(web3.toWei(1, 'gwei')),//以太币数量
            data: i
        };
        //构造此交易对象
        var tx = new Tx(rawTx);
        //发起人私钥签名
        tx.sign(privateKey);
        //交易序列化
        var serializedTx = tx.serialize();
        //执行交易
        web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
            console.log('transaction id ：' + hash + 'error:' + err);
        });
    }
});