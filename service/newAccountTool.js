
var walletTool = require('ethereumjs-wallet'); //引入以太坊nodejs操作钱包支持
var accountDb = require('../models/Account');
// console.info(wallet.getPrivateKey().toString('hex'));
// console.info(wallet.getAddress().toString('hex'));

var AccountService ={
    addAccount:function(length){
        for (var i = 0;i<length;i++) {
            var wallet = walletTool.generate(true);
            var account = {};
            account.publicKey = '0x' + wallet.getAddress().toString('hex');
            account.privateKey = '0x' + wallet.getPrivateKey().toString('hex');
            account.lastTxTimestamp = '';
            account.txCount = '';

            accountDb.addAccount(account, function (error, result) {
                //console.info(i+1);
                //console.info('error: ' + error);
                console.info(i + ' : error: ' + error +  ' result: ' + JSON.stringify(result));
            });
        }
    },
    getAccounts:function (num, offset, callback) {
        return accountDb.getAllAccounts(num, offset, callback);
    }
};


module.exports=AccountService;