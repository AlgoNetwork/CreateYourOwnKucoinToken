var ERC20MultiFunctionABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
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
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cap",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "spender",
				"type": "address"
			},
			{
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "isPauser",
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
		"constant": true,
		"inputs": [],
		"name": "paused",
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
		"inputs": [],
		"name": "renouncePauser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "account",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "addPauser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
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
		"constant": false,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "addMinter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceMinter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
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
				"name": "account",
				"type": "address"
			}
		],
		"name": "isMinter",
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
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "symbol",
				"type": "string"
			},
			{
				"name": "decimals",
				"type": "uint8"
			},
			{
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"name": "cap",
				"type": "uint256"
			},
			{
				"name": "adminAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "PauserAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "PauserRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "account",
				"type": "address"
			}
		],
		"name": "MinterRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}
] ;

var ERC20MultiFunctionBytecode ="60806040523480156200001157600080fd5b506040516200224b3803806200224b833981018060405260c08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b50506020808301516040840151606085015160809095015188519497509195509392909160ff8616600a0a84029188918891889162000110916003918601906200069f565b508151620001269060049060208501906200069f565b506005805460ff191660ff92909216919091179055506200016490506200015564010000000062000230810204565b64010000000062000235810204565b60008111620001d457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f45524332304361707065643a2063617020697320300000000000000000000000604482015290519081900360640190fd5b600755620001fd620001ee64010000000062000230810204565b64010000000062000287810204565b6009805460ff19169055620002248160ff8616600a0a8502640100000000620002d9810204565b50505050505062000741565b335b90565b6200025060068264010000000062001a2a6200039582021704565b604051600160a060020a038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620002a260088264010000000062001a2a6200039582021704565b604051600160a060020a038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6007546200030982620002f46401000000006200043c810204565b90640100000000620017ee6200044282021704565b11156200037757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f45524332304361707065643a2063617020657863656564656400000000000000604482015290519081900360640190fd5b6200039182826401000000006200184b620004be82021704565b5050565b620003aa8282640100000000620005df810204565b156200041757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b60025490565b600082820183811015620004b757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600160a060020a03821615156200053657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600254620005539082640100000000620017ee6200044282021704565b600255600160a060020a038216600090815260208190526040902054620005899082640100000000620017ee6200044282021704565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000600160a060020a03821615156200067f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620006e257805160ff191683800117855562000712565b8280016001018555821562000712579182015b8281111562000712578251825591602001919060010190620006f5565b506200072092915062000724565b5090565b6200023291905b808211156200072057600081556001016200072b565b611afa80620007516000396000f3fe60806040526004361061013d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde038114610142578063095ea7b3146101cc57806318160ddd1461021957806323b872dd14610240578063313ce56714610283578063355274ea146102ae57806339509351146102c35780633f4ba83a146102fc57806340c10f191461031357806342966c681461034c57806346fbf68e146103765780635c975abb146103a95780636ef8d66d146103be57806370a08231146103d357806379cc67901461040657806382dc1ec41461043f5780638456cb591461047257806395d89b4114610487578063983b2d561461049c57806398650275146104cf578063a457c2d7146104e4578063a9059cbb1461051d578063aa271e1a14610556578063dd62ed3e14610589575b600080fd5b34801561014e57600080fd5b506101576105c4565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610191578181015183820152602001610179565b50505050905090810190601f1680156101be5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d857600080fd5b50610205600480360360408110156101ef57600080fd5b50600160a060020a03813516906020013561065a565b604080519115158252519081900360200190f35b34801561022557600080fd5b5061022e6106b7565b60408051918252519081900360200190f35b34801561024c57600080fd5b506102056004803603606081101561026357600080fd5b50600160a060020a038135811691602081013590911690604001356106bd565b34801561028f57600080fd5b5061029861071c565b6040805160ff9092168252519081900360200190f35b3480156102ba57600080fd5b5061022e610725565b3480156102cf57600080fd5b50610205600480360360408110156102e657600080fd5b50600160a060020a03813516906020013561072b565b34801561030857600080fd5b50610311610781565b005b34801561031f57600080fd5b506102056004803603604081101561033657600080fd5b50600160a060020a0381351690602001356108b9565b34801561035857600080fd5b506103116004803603602081101561036f57600080fd5b503561095a565b34801561038257600080fd5b506102056004803603602081101561039957600080fd5b5035600160a060020a031661096e565b3480156103b557600080fd5b50610205610987565b3480156103ca57600080fd5b50610311610990565b3480156103df57600080fd5b5061022e600480360360208110156103f657600080fd5b5035600160a060020a03166109a2565b34801561041257600080fd5b506103116004803603604081101561042957600080fd5b50600160a060020a0381351690602001356109bd565b34801561044b57600080fd5b506103116004803603602081101561046257600080fd5b5035600160a060020a03166109cb565b34801561047e57600080fd5b50610311610a5b565b34801561049357600080fd5b50610157610b61565b3480156104a857600080fd5b50610311600480360360208110156104bf57600080fd5b5035600160a060020a0316610bc2565b3480156104db57600080fd5b50610311610c52565b3480156104f057600080fd5b506102056004803603604081101561050757600080fd5b50600160a060020a038135169060200135610c62565b34801561052957600080fd5b506102056004803603604081101561054057600080fd5b50600160a060020a038135169060200135610cb8565b34801561056257600080fd5b506102056004803603602081101561057957600080fd5b5035600160a060020a0316610d0e565b34801561059557600080fd5b5061022e600480360360408110156105ac57600080fd5b50600160a060020a0381358116916020013516610d21565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106505780601f1061062557610100808354040283529160200191610650565b820191906000526020600020905b81548152906001019060200180831161063357829003601f168201915b5050505050905090565b60095460009060ff16156106a6576040805160e560020a62461bcd0281526020600482015260106024820152600080516020611aaf833981519152604482015290519081900360640190fd5b6106b08383610d4c565b9392505050565b60025490565b60095460009060ff1615610709576040805160e560020a62461bcd0281526020600482015260106024820152600080516020611aaf833981519152604482015290519081900360640190fd5b610714848484610d60565b949350505050565b60055460ff1690565b60075490565b60095460009060ff1615610777576040805160e560020a62461bcd0281526020600482015260106024820152600080516020611aaf833981519152604482015290519081900360640190fd5b6106b08383610e3f565b61079161078c610e93565b61096e565b151561080d576040805160e560020a62461bcd02815260206004820152603060248201527f506175736572526f6c653a2063616c6c657220646f6573206e6f74206861766560448201527f207468652050617573657220726f6c6500000000000000000000000000000000606482015290519081900360840190fd5b60095460ff161515610869576040805160e560020a62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6009805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61089c610e93565b60408051600160a060020a039092168252519081900360200190a1565b60006108cb6108c6610e93565b610d0e565b1515610947576040805160e560020a62461bcd02815260206004820152603060248201527f4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766560448201527f20746865204d696e74657220726f6c6500000000000000000000000000000000606482015290519081900360840190fd5b6109518383610e97565b50600192915050565b61096b610965610e93565b82610f12565b50565b600061098160088363ffffffff61109216565b92915050565b60095460ff1690565b6109a061099b610e93565b61113a565b565b600160a060020a031660009081526020819052604090205490565b6109c78282611182565b5050565b6109d661078c610e93565b1515610a52576040805160e560020a62461bcd02815260206004820152603060248201527f506175736572526f6c653a2063616c6c657220646f6573206e6f74206861766560448201527f207468652050617573657220726f6c6500000000000000000000000000000000606482015290519081900360840190fd5b61096b81611228565b610a6661078c610e93565b1515610ae2576040805160e560020a62461bcd02815260206004820152603060248201527f506175736572526f6c653a2063616c6c657220646f6573206e6f74206861766560448201527f207468652050617573657220726f6c6500000000000000000000000000000000606482015290519081900360840190fd5b60095460ff1615610b2b576040805160e560020a62461bcd0281526020600482015260106024820152600080516020611aaf833981519152604482015290519081900360640190fd5b6009805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861089c610e93565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106505780601f1061062557610100808354040283529160200191610650565b610bcd6108c6610e93565b1515610c49576040805160e560020a62461bcd02815260206004820152603060248201527f4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766560448201527f20746865204d696e74657220726f6c6500000000000000000000000000000000606482015290519081900360840190fd5b61096b81611270565b6109a0610c5d610e93565b6112b8565b60095460009060ff1615610cae576040805160e560020a62461bcd0281526020600482015260106024820152600080516020611aaf833981519152604482015290519081900360640190fd5b6106b08383611300565b60095460009060ff1615610d04576040805160e560020a62461bcd0281526020600482015260106024820152600080516020611aaf833981519152604482015290519081900360640190fd5b6106b083836113b2565b600061098160068363ffffffff61109216565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000610951610d59610e93565b84846113c6565b6000610d6d848484611533565b610e3584610d79610e93565b610e3085606060405190810160405280602881526020017f45524332303a207472616e7366657220616d6f756e742065786365656473206181526020017f6c6c6f77616e6365000000000000000000000000000000000000000000000000815250600160008b600160a060020a0316600160a060020a031681526020019081526020016000206000610e09610e93565b600160a060020a03168152602081019190915260400160002054919063ffffffff61175416565b6113c6565b5060019392505050565b6000610951610e4c610e93565b84610e308560016000610e5d610e93565b600160a060020a03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6117ee16565b3390565b600754610eb282610ea66106b7565b9063ffffffff6117ee16565b1115610f08576040805160e560020a62461bcd02815260206004820152601960248201527f45524332304361707065643a2063617020657863656564656400000000000000604482015290519081900360640190fd5b6109c7828261184b565b600160a060020a0382161515610f98576040805160e560020a62461bcd02815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051606081018252602281527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e6020808301919091527f636500000000000000000000000000000000000000000000000000000000000082840152600160a060020a038516600090815290819052919091205461101e91839063ffffffff61175416565b600160a060020a03831660009081526020819052604090205560025461104a908263ffffffff61194016565b600255604080518281529051600091600160a060020a038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6000600160a060020a038216151561111a576040805160e560020a62461bcd02815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b50600160a060020a03166000908152602091909152604090205460ff1690565b61114b60088263ffffffff61198216565b604051600160a060020a038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b61118c8282610f12565b6109c782611198610e93565b610e3084606060405190810160405280602481526020017f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7781526020017f616e6365000000000000000000000000000000000000000000000000000000008152506001600089600160a060020a0316600160a060020a031681526020019081526020016000206000610e09610e93565b61123960088263ffffffff611a2a16565b604051600160a060020a038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b61128160068263ffffffff611a2a16565b604051600160a060020a038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6112c960068263ffffffff61198216565b604051600160a060020a038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b600061095161130d610e93565b84610e3085606060405190810160405280602581526020017f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7781526020017f207a65726f0000000000000000000000000000000000000000000000000000008152506001600061137b610e93565b600160a060020a03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61175416565b60006109516113bf610e93565b8484611533565b600160a060020a038316151561144b576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03821615156114d1576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600160a060020a03831615156115b9576040805160e560020a62461bcd02815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038216151561163f576040805160e560020a62461bcd02815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051606081018252602681527f45524332303a207472616e7366657220616d6f756e74206578636565647320626020808301919091527f616c616e6365000000000000000000000000000000000000000000000000000082840152600160a060020a03861660009081529081905291909120546116c591839063ffffffff61175416565b600160a060020a0380851660009081526020819052604080822093909355908416815220546116fa908263ffffffff6117ee16565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156117e65760405160e560020a62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117ab578181015183820152602001611793565b50505050905090810190601f1680156117d85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156106b0576040805160e560020a62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600160a060020a03821615156118ab576040805160e560020a62461bcd02815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6002546118be908263ffffffff6117ee16565b600255600160a060020a0382166000908152602081905260409020546118ea908263ffffffff6117ee16565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60006106b083836040805190810160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611754565b61198c8282611092565b1515611a08576040805160e560020a62461bcd02815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c60448201527f6500000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a0316600090815260209190915260409020805460ff19169055565b611a348282611092565b15611a89576040805160e560020a62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b600160a060020a0316600090815260209190915260409020805460ff1916600117905556fe5061757361626c653a2070617573656400000000000000000000000000000000a165627a7a723058204955170c6ea978150b50775cf959d2b4cb889763fe834c39af8283cd913631490029";