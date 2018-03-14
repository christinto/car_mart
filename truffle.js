var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "vLayarAtFQnaC8vUSOvW"; //harish's key
//get mnemonic from meta ropsten reveal seed..
var mnemonic = "gallery bright absent okay chief this stairs bring team carry uncover donor"
//we can connect to ropsten via infura, try via geth cli next..

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten:  {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: "3",
      port:  8545,
      gas:   2900000
    }
  }
};
