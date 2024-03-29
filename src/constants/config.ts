export const CONFIG = {
    scrolltestnet: {
        WrappedTokenGatewayV3: "0x57ce905CfD7f986A929A26b006f797d181dB706e",
        PoolProxy: "0x48914C788295b5db23aF2b5F0B3BE775C4eA9440",
        usdcAddress: "0x2C9678042D52B97D27f2bD2947F7111d93F3dD0D",
        WETHAddress: "0x5300000000000000000000000000000000000004",
    },
    mumbai: {
        WrappedTokenGatewayV3: "0x8dA9412AbB78db20d0B496573D9066C474eA21B8",
        PoolProxy: "0xcC6114B983E4Ed2737E9BD3961c9924e6216c704",
        usdcAddress: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e",
        WETHAddress: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
    },
    arbigoerli: {
        WrappedTokenGatewayV3: "0xcD1065F2c3A0e0a94d543Ce41720BFF515f753B7",
        PoolProxy: "0x20fa38a4f8Af2E36f1Cc14caad2E603fbA5C535c",
        usdcAddress: "0xEA70a40Df1432A1b38b916A51Fb81A4cc805a963",
        WETHAddress: "0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f",
    },
    arbitrum: {
        WrappedTokenGatewayV3: "0xB5Ee21786D28c5Ba61661550879475976B707099",
        PoolProxy: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        usdcAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        WETHAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        oneinchrouter: "0x1111111254eeb25477b68fb85ed929f73a960582",
    }, celo: {
        WrappedTokenGatewayV3: "0xB5Ee21786D28c5Ba61661550879475976B707099",
        PoolProxy: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        usdcAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        WETHAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
        oneinchrouter: "0x1111111254eeb25477b68fb85ed929f73a960582",
    }, polygon: {
        WrappedTokenGatewayV3: "0x1e4b7A6b903680eab0c5dAbcb8fD429cD2a9598c",
        PoolProxy: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
        usdcAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        WETHAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        oneinchrouter: "0x1111111254EEB25477B68fb85Ed929f73A960582",
    }, base: {
        WrappedTokenGatewayV3: "0x18CD499E3d7ed42FEbA981ac9236A278E4Cdc2ee",
        PoolProxy: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
        usdcAddress: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
        WETHAddress: "0x4200000000000000000000000000000000000006"
    }
}

export const UNISWAP_ADDRESS = {
    // scroll does not have a uniswap address
    scrolltestnet: {
        UNISWAP_V3_ROUTER_ADDRESS: "0x57ce905CfD7f986A929A26b006f797d181dB706e",
        USDC_TOKEN_ADDRESS: "0x2C9678042D52B97D27f2bD2947F7111d93F3dD0D",
        WETH_ADDRESS: "0x5300000000000000000000000000000000000004",

    },
    mumbai: {
        UNISWAP_V3_ROUTER_ADDRESS: "0x8dA9412AbB78db20d0B496573D9066C474eA21B8",
        USDC_TOKEN_ADDRESS: "0xcC6114B983E4Ed2737E9BD3961c9924e6216c704",
        WETH_ADDRESS: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",

    },
    arbigoerli: {
        UNISWAP_V3_ROUTER_ADDRESS: "0xcD1065F2c3A0e0a94d543Ce41720BFF515f753B7",
        USDC_TOKEN_ADDRESS: "0xEA70a40Df1432A1b38b916A51Fb81A4cc805a963",
        WETH_ADDRESS: "0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f",

    },
    arbitrum: {
        UNISWAP_V3_ROUTER_ADDRESS: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        USDC_TOKEN_ADDRESS: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        WETH_ADDRESS: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",

    },
    goerli: {
        UNISWAP_V3_ROUTER_ADDRESS: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        USDC_TOKEN_ADDRESS: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F.",
        WETH_ADDRESS: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    }, 
    polygon: {
        UNISWAP_V3_ROUTER_ADDRESS: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        USDC_TOKEN_ADDRESS: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        WETH_ADDRESS: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    }, 
    celo: {
        UNISWAP_V3_ROUTER_ADDRESS: "0x5615CDAb10dc425a742d643d949a7F474C01abc4",
        USDC_TOKEN_ADDRESS: "0x37f750B7cC259A2f741AF45294f6a16572CF5cAd",
        WETH_ADDRESS: "0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207",
    }, 
    base: {
        UNISWAP_V3_ROUTER_ADDRESS: "0x2626664c2603336E57B271c5C0b26F421741e481",
        USDC_TOKEN_ADDRESS: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
        WETH_ADDRESS: "0x4200000000000000000000000000000000000006",
    }
}