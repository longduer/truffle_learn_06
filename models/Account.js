var db = require('../db');


var Account={
    addAccount:function(Account,callback){
        return db.query("Insert into account values(?,?,?,?)",
            [Account.publicKey,Account.privateKey,Account.lastTxTimestamp,Account.txCount],callback);
        //return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
    }
    ,getAllAccounts:function(num, offset, callback){
        return db.query("select * from account order by public_key desc limit ? offset ?", [num, offset], callback);
    },
    // getTaskById:function(id,callback){
    //     return db.query("select * from task where Id=?", [id], callback);
    // },
    // deleteTask:function(id,callback){
    //     return db.query("delete from task where Id=?",[id],callback);
    // },
    // updateTask:function(id,Task,callback){
    //     return  db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
    // },
    // deleteAll:function(item,callback){
    //     var delarr=[];
    //     for(i=0;i<item.length;i++){
    //         delarr[i]=item[i].Id;
    //     }
    //     return db.query("delete from task where Id in (?)",[delarr],callback);
    // }
};

module.exports=Account;