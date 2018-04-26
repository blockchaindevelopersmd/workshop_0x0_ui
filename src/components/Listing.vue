<template>
  <div>
    <md-empty-state v-if="votings.length <= 0"
      class="md-primary"
      md-icon="format_list_numbered"
      md-label="No voting contracts."
      md-description="You can use button <Add Your Contract> to be the first who finished and deployed the contract.">
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: 'Listing',
  data() {
    return {
      votings: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
