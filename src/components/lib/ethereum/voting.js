/**
 * In hardcode we trust
 */
export default class Voting {
  constructor({ address, Stage1, Stage2 }) {
    this.address = address;
    this.Stage1 = Stage1;
    this.Stage2 = Stage2;

    this.name = null;
    this.website = null;
    this.logo = null;
    this.totalVoteCount = null;
    this.startTime = null;
    this.endTime = null;
  }

  async init() {
    try {
      this.startTime = (await this.Stage2.startTime.call()).toString(10);
      this.startTime = new Date(Number.parseInt(this.startTime) * 1000);

      this.endTime = (await this.Stage2.endTime.call()).toString(10);
      this.endTime = new Date(Number.parseInt(this.endTime) * 1000);
    } catch (_) {}

    this.name = await this.Stage1.name.call();
    this.website = await this.Stage1.website.call();
    this.logo = await this.Stage1.logo.call();
    this.totalVoteCount = (await this.Stage1.totalVoteCount.call()).toString(10);
    this.totalVoteCount = Number.parseInt(this.totalVoteCount);

    return this;
  }
}
