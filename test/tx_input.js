//0x3e0ed4c089e924ff34232bb1de9ea29f0b59b9334f1d8b58383557d205782999

var Web3= require("web3"); //添加以太坊web3.js支持
web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.23.71:8545'));

web3.eth.getTransaction('0x3e0ed4c089e924ff34232bb1de9ea29f0b59b9334f1d8b58383557d205782999',function (err, result) {
    console.info(err);
    console.info(result.input);
    console.info(web3.toAscii(result.input));
});

