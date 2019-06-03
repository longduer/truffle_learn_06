pragma solidity ^0.4.23;

contract batchIonc {

    function batchTransfer(address[] _receivers, uint256 _value) payable public {

        for (uint256 i = 0; i < _receivers.length; i++) {
            _receivers[i].transfer(_value);
        }
    }
}
