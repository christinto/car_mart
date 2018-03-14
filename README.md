# carmart
Tools & Framework needed.
Metamask-wallet
Truffle framework
Node latest version


In the truffle js you can see how we deployed to the infura hosted version of ropsten.

Rather than running geth on our machine we have pushed to the cloud chain ropsten

Our contract is sitting on ropsten at:

address: 0x4f359b0fa17b7d2e460fff0d2fd78c07966c3a0d

abi:
[
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_vin",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "vowner",
          "type": "string"
        }
      ],
      "name": "NewVehicle",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_vin",
          "type": "bytes32"
        },
        {
          "name": "_year",
          "type": "string"
        },
        {
          "name": "_model",
          "type": "string"
        },
        {
          "name": "_make",
          "type": "string"
        },
        {
          "name": "_vonwer",
          "type": "string"
        }
      ],
      "name": "registerVehicle",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "isVehicle",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_vin",
          "type": "bytes32"
        },
        {
          "name": "_voner",
          "type": "string"
        }
      ],
      "name": "transferVehicle",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "getVehicleOnwer",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "getVehiclemake",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "getVehiclemodel",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "getVehicleyear",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]


