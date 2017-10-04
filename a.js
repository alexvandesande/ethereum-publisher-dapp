(async () => {
const Publisher = require(".");
const Eth = require("eth-lib");
const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

const publisher = await Publisher({
    ipfsUrl: "https://ipfs.infura.io:5001",
    ethUrl: "https://rinkeby.infura.io/sE0I5J1gO2jugs9LndHR"
});

console.log(Eth)
console.log(Eth.account.fromPrivate("0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"))
console.log(Eth.bytes.toString("0x6b656363616b3235360000000000000000000000000000000000000000000000"))
console.log(Eth.bytes.toString("0x98e3a02c91748b456dd53ae9d3d9d2bc4507696c469bd64e57e39206a856e3d1"))
console.log(Eth.bytes.toString("0x6970667343696400000000000000000000000000000000000000000000000000"))
console.log(publisher.bytes32ToCid("0xe16a3da6f08837db32fe4971b969163a34a33c566de8852dc73c616499066a12"))
console.log(await ipfs.cat("zb2ri2bhsWjpHiUYeXeAwnS7GS2SbUViBQgwy6qDpHj7EZdE1"));

})()