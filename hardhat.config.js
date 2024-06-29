import '@vechain/sdk-hardhat-plugin';

import { VET_DERIVATION_PATH } from '@vechain/sdk-core';
import { type HttpNetworkConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
solidity: {
    compilers: [
    {
        version: '0.8.20', // Specify the first Solidity version
        settings: {
            // Additional compiler settings for this version
            optimizer: {
                enabled: true,
                runs: 200
            },
            evmVersion: 'paris' // EVM version (e.g., "byzantium", "constantinople", "petersburg", "istanbul", "berlin", "london")
        }
    },
    ]
},
networks: {
    vechain_testnet: {
    // Testnet
    url: 'https://testnet.vechain.org',
    accounts: {
        mnemonic:
            'vivid any call mammal mosquito budget midnight expose spirit approve reject system',
        path: VET_DERIVATION_PATH,
        count: 3,
        initialIndex: 0,
        passphrase: 'vechainthor'
    },
    debug: true,
    delegator: undefined,
    gas: 'auto',
    gasPrice: 'auto',
    gasMultiplier: 1,
    timeout: 20000,
    httpHeaders: {}
} satisfies HttpNetworkConfig,
}
};