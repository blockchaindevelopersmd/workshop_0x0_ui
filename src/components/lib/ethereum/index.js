import contract from "truffle-contract";
import Web3 from "web3";
import Stage1 from "../../../artifacts/Stage1.json";
import Stage2 from "../../../artifacts/Stage2.json";
import addresses from "../../../contracts.json";

export default class Ethereum {
  constructor(Contract) {
    this.Contract = Contract;
  }

  static async contracts() {
    const contracts = [];
    
    for (let address of addresses) {
      contracts.push({
        address,
        Stage1: await this.Stage1(address),
        Stage2: await this.Stage2(address),
      });
    }

    return contracts;
  }

  static async Stage1(address) {
    return this.contract(Stage1).at(address);
  }

  static async Stage2(address) {
    return this.contract(Stage2).at(address);
  }

  static contract(artifact, provider = null) {
    provider = provider || new Web3.providers.HttpProvider("https://ropsten.infura.io/metamask");

    const Contract = contract(artifact);

    Contract.setProvider(provider);

    return new this(Contract);
  }
}
