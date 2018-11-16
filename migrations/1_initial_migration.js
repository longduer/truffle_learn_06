var batch = artifacts.require("./Multiplexer.sol");
var MMToken = artifacts.require("./MarmotToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MMToken,21000000,"Marmot Token",18,"MMT");
};
