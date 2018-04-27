<template>
  <div>
    <md-empty-state v-if="votings.length <= 0"
      class="md-primary"
      md-icon="format_list_numbered"
      md-label="No voting contracts."
      md-description="You can use button <Add Your Contract> to be the first who finished and deployed the contract.">
    </md-empty-state>

    <md-card class="md-accent" md-with-hover v-for="voting in votings" :key="voting.address">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Accent color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
import Ethereum from "./lib/ethereum";

export default {
  name: 'Listing',
  data() {
    return {
      votings: [],
    };
  },
  async mounted() {
    this.votings = await Ethereum.contracts();
  }
};
</script>
