var accountTool = require('./service/newAccountTool');
var current_page = 1;
var pageSize = 10;
var pageFrom = pageSize * (current_page - 1);
accountTool.getAccounts(pageSize,pageFrom,function (err,result) {
    for (var i =0 ;i<result.length;i++) {
        console.info(result[i].public_key);
    }
});
