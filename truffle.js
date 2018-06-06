// Example for truffle js using infura...
// HDWalletProvider is a wrapper for web3
// added rinkeby.. as ropsten is depracating
// issues deploying to rinkeby, try this.. worked :)
// gas is higher
// https://ethereum.stackexchange.com/questions/30048/truffle-migrate-network-rinkeby-error-encountered-bailing-network-state-unk
var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "vLayarAtFQnaC8vUSOvW"; //harish's key
//get mnemonic from meta ropsten reveal seed..
var mnemonic = "gallery bright absent okay chief this stairs bring team carry uncover donor"
//we can connect to ropsten via infura, try via geth cli next..

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    //truffle console --network ropsten

// https://github.com/trufflesuite/truffle-contract
//
// http://truffleframework.com/docs/getting_started/console
//
//     http://truffleframework.com/docs/advanced/configuration#networks
    //recommended to wrap provider inside a function() to avoid opening too many connections
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
        },
        rinkeby:  {
            provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"+infura_apikey),
            network_id: "4",
            port:  8545,
            gas:   4300000
        }
    }
};
