var Web3 = require("web3"); //引入web3支持，我本地使用的是web3^0.18.4
var Tx = require("ethereumjs-tx"); //引入以太坊js交易支持
var accountTool = require('./service/newAccountTool');
var schedule = require('node-schedule');

function scheduleCronstyle() {

    //job任务
    schedule.scheduleJob('*/60 * * * * ?', function () {
        runJob();
    });

    // setInterval(function () {
    //     console.info(new Date() + ' -- setInterval 取消定时检查 -- locked: ' + locked);
    //     if (!locked) {
    //         console.log(new Date() + ' -- locked: ' + locked + '定时器取消');
    //         j.cancel();
    //     }
    // },  1*60*1000); //每一分钟检查一下，进行取消操作
}

scheduleCronstyle();



function runJob() {

    var httpProviders = [
        "http://192.168.23.178:8545",
        "http://192.168.23.101:8545",
        "http://192.168.23.99:8545",
        "http://192.168.23.98:8545"

    ];
    var r = Math.floor(Math.random()*4);
    console.info('date: ' + new Date() + ";index : " + r + ";httpProviders: " + httpProviders[r]);
    web3 = new Web3(new Web3.providers.HttpProvider(httpProviders[r]));
    //交易接收者
    var toAddress = '0x01db2f0f25c0b7588cdb16c250729bf38ce8d7ea';

    //console.info(result[i].private_key.toString().substring(2));
    //交易发送者
    var privateKey = Buffer.from('6e7fb0c9bec85270b9c15452546c71b4911cabd571b972c88a195c163b2fe363','hex');
    var fromAddress = '0xb5c1d2730301e4cbc568b5a04367f867f26f4345';

    var number = web3.eth.getTransactionCount(fromAddress);
    //通过交易参数
    var rawTx = {
        nonce: number,//交易数
        gasPrice: '0x3b9aca00',//gas价格
        gasLimit: '0x3d0900',
        to: toAddress,//转账到哪个账户
        value: web3.toHex(web3.toWei(100, 'gwei')),//以太币数量
        data: ''
    };
    //构造此交易对象
    var tx = new Tx(rawTx);
    //发起人私钥签名
    tx.sign(privateKey);
    //交易序列化
    var serializedTx = tx.serialize();
    //执行交易
    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
        console.log('transaction id ：' + hash + ';error:' + err);
    });
}
