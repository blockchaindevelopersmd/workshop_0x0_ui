<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">BDM- Workshop 0x0</span>

          <div class="md-toolbar-section-end">
            <a target="_blank" href="https://github.com/blockchaindevelopersmd/workshop_0x0_ui/blob/master/src/contracts.json">
              <md-button class="md-primary">
                <md-icon>add_circle</md-icon>
                <span>Add Your Contract</span>
              </md-button>
            </a>   
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Useful Links
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>school</md-icon>
            <span class="md-list-item-text">
              <a target="_blank" href="http://truffleframework.com/docs/">Truffle Docs</a>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>school</md-icon>
            <span class="md-list-item-text">
              <a target="_blank" href="https://solidity.readthedocs.io/en/v0.4.23/">Solidity Docs</a>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>work</md-icon>
            <span class="md-list-item-text">
              <a target="_blank" href="https://github.com/blockchaindevelopersmd/workshop_0x0_seed">Task in GitHub</a>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>people</md-icon>
            <span class="md-list-item-text">
              <a target="_blank" href="https://www.facebook.com/groups/blockchainmd/">BDM Facebook Group</a>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style lang="scss" scoped>
  .page-container {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .md-app {
    min-height: 600px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
