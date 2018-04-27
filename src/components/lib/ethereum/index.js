import contract from 'truffle-contract';
import Web3 from 'web3';
import Stage1Artifact from '../../../artifacts/Stage1.json';
import Stage2Artifact from '../../../artifacts/Stage2.json';
import addresses from '../../../contracts.json';
import Voting from './voting';

/**
 * In hardcode we trust
 */
export default class Ethereum {
  static async contracts() {
    const contracts = [];

    for (const address of addresses) {
      const Stage1 = await this.loadContract(Stage1Artifact, address);
      const Stage2 = await this.loadContract(Stage2Artifact, address);

      const voting = new Voting({ address, Stage1, Stage2 });

      contracts.push(await voting.init());
    }

    return contracts;
  }

  static async loadContract(artifact, address, provider = null) {
    const Contract = contract(artifact);

    const contractProvider = provider || new Web3.providers.HttpProvider(
      'https://ropsten.infura.io/metamask',
    );

    if (!contractProvider.sendAsync && contractProvider.send) {
      contractProvider.sendAsync = contractProvider.send.bind(contractProvider);
    }

    Contract.setProvider(contractProvider);

    return Contract.at(address);
  }
}
