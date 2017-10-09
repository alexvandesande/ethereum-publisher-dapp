(async () => {
const Publisher = require(".");
const Eth = require("eth-lib");
const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");
const Moon = require("moon-lang")("https://ipfs.infura.io:5001");
const keccak256 = Moon.parse(await Moon.imports("zb2rhkcDyioJbNcAMUAD4rBxi1pp5g5qFzAkGvQiKPu6MJcVu"));
const seed = require("fs").readFileSync("./privateKey", "utf8");

const publisher = await Publisher({
    ipfsUrl: "https://ipfs.infura.io:5001",
    ethUrl: "https://rinkeby.infura.io/sE0I5J1gO2jugs9LndHR"
});

console.log(Eth)
console.log("-------");
console.log(Eth.bytes.toString("0x69706673436964"))
console.log(Eth.bytes.toString("0xb77e4b12d5adaa023de8d41b12b8315c65dd98515619d0cf03cf73649580f130"))
console.log(publisher.bytes32ToCid("0xb77e4b12d5adaa023de8d41b12b8315c65dd98515619d0cf03cf73649580f130"))
console.log("-------");

// console.log(await ipfs.cat("zb2ri2bhsWjpHiUYeXeAwnS7GS2SbUViBQgwy6qDpHj7EZdE1"))
console.log("Some private key from seed", Eth.account.fromPrivate(keccak256(seed)))

})()
