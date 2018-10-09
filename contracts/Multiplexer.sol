pragma solidity ^0.4.24;


contract Multiplexer {

    function sendEth(address[] _to, uint256 _value) public payable returns (bool _success) {
        // input validation
        assert(_to.length <= 255);
        // count values for refunding sender
        uint256 beforeValue = msg.value;
        uint256 afterValue = 0;
        // loop through to addresses and send value
        for (uint8 i = 0; i < _to.length; i++) {
            afterValue = afterValue + _value;
            assert(_to[i].send(_value));
        }
        // send back remaining value to sender
        uint256 remainingValue = beforeValue - afterValue;
        if (remainingValue > 0) {
            assert(msg.sender.send(remainingValue));
        }
        return true;
    }
}