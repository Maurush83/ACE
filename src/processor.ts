import Web3 from "web3";
import { OpenSeaPort, Network } from 'opensea-js'
import { OpenSeaAsset } from "opensea-js/lib/types";
import { resolve } from "path/posix";

export class Processor {

    private openSeaPort: OpenSeaPort;

    constructor() {
        const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io');
        this.openSeaPort = new OpenSeaPort(provider, {
            networkName: Network.Main,
            apiKey: undefined
          });
    }

    getAssets(): OpenSeaAsset[] {
        let assets: OpenSeaAsset[] = [];
        console.log("getting assets ")
        const getAssets$ = this.openSeaPort.api.getAssets()
        
        getAssets$.then(values => {
            console.log(`Retrieved ${values.estimatedCount} assets`);
            assets = values.assets;
        });

        return assets;
    }

}