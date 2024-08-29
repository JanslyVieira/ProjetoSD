// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract EtherTransfer{
    function transferEther(address payable _to) external payable{
        require(msg.value > 0, "valor de transferencia precisa sen maion que o");
        _to.transfer(msg.value);
    

    }

}
