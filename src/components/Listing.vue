<template>
  <div>
    <md-content class="md-layout md-gutter md-alignment-center" v-if="loading">
      <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
    </md-content>
    
    <md-empty-state v-if="!loading && votings.length <= 0"
      class="md-primary"
      md-icon="weekend"
      md-label="No voting contracts."
      md-description="You can use button <Add Your Contract>
        to be the first who finished and deployed the contract.">
    </md-empty-state>

    <md-card md-with-hover v-for="(voting, idx) in votings" :key="idx">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ voting.name }}</div>
          <div class="md-subhead">Voted: {{ voting.totalVoteCount }}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="voting.logo" alt="Logo">
        </md-card-media>
      </md-card-header>

      <md-card-content v-if="hasProgress(voting)">
        <md-avatar>
          <md-icon>access_time</md-icon>
        </md-avatar>
        <md-progress-bar md-mode="determinate" :md-value="progress(voting)"></md-progress-bar>
      </md-card-content>

      <md-card-actions>
        <md-button target="_blank" :href="voting.website" class="md-flat md-primary">Vote</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Ethereum from './lib/ethereum';

export default {
  name: 'Listing',
  data() {
    return {
      votings: [],
      loading: true,
    };
  },
  mounted() {
    (async () => {
      this.votings = await Ethereum.contracts();
      this.loading = false;
    })();
  },
  methods: {
    hasProgress(voting) {
      return voting.startTime && voting.endTime;
    },
    progress(voting) {
      const now = new Date();

      if (now < voting.startTime) {
        return 0;
      } else if (now > voting.endTime) {
        return 100;
      }

      const segment = voting.endTime.getTime() - voting.startTime.getTime();
      const elapsed = now.getTime() - voting.startTime.getTime();

      return Number.parseInt(elapsed * 100 / segment);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-content {
    width: 100%;
    height: 100%;
  }

  .md-card {
    width: 350px;
    margin: 10px;
    display: inline-block;
    vertical-align: top;
    cursor: default;
  }

  .md-card-media {
    width: 100%;
  }
</style>
