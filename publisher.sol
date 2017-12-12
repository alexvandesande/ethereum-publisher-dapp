pragma solidity ^0.4.0;

contract Publisher {

    mapping(bytes32 => bytes32) public latestVersion;

    address public owner;
    uint public latestUpdate;

    event Published(uint timestamp, bytes32 key, bytes32 value);

    function Publisher() public {
        owner = msg.sender;
    }

    function publish(bytes32[] keys, bytes32[] values) public {
        require(msg.sender==owner);
        require(keys.length== values.length);
        latestUpdate = now;

        for (uint i =0; i < keys.length; i++) {
            latestVersion[keys[i]] = values[i];
            Published(latestUpdate, keys[i], values[i]);
        }
    }

    function publishOne(bytes32 key, bytes32 value) public {
        require(msg.sender==owner);
        latestUpdate = now;

        latestVersion[key] = value;
        Published(latestUpdate, key, value);
    }
}
