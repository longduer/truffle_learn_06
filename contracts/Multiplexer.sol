pragma solidity ^0.5.8;


contract Multiplexer {

    function sendEth(address payable[] memory _to, uint256 _value) public payable returns (bool) {

        uint256 beforeValue = msg.value;
        uint256 afterValue = 0;

        for (uint8 i = 0; i < _to.length; i++) {
            afterValue = afterValue + _value;
            assert(_to[i].send(_value));
        }

        uint256 remainingValue = beforeValue - afterValue;
        if (remainingValue > 0) {
            assert(msg.sender.send(remainingValue));
        }
        return true;
    }
}