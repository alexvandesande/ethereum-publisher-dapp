
const Publisher = require(".");
const Eth = require("eth-lib");


(async () => {

  const Moon = require("moon-lang")("https://ipfs.infura.io:5001");
  const keccak256 = Moon.parse(await Moon.imports("zb2rhkcDyioJbNcAMUAD4rBxi1pp5g5qFzAkGvQiKPu6MJcVu"));
  const seed = require("fs").readFileSync("./privateKey", "utf8");
  const privateKey = keccak256(seed);

  // Creates a Publisher instance
  const publisher = await Publisher({
    ipfsUrl: "https://ipfs.infura.io:5001",
    ethUrl: "https://rinkeby.infura.io/sE0I5J1gO2jugs9LndHR"
  });

  // Publishes the keccak256 and the ipfs cid of the JSON
  // Note: the IPFS cid is converted to bytes32. To convert
  // it back, use publisher.bytes32ToCid("0x...").
  const txid = await publisher.publish({
    privateKey: privateKey,
    json: {foo: "bar", y: 2, z: 3}
  });

  console.log("Transaction id:");
  console.log(txid);

})();
