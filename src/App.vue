<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <span class="md-title">BDM</span>
          <span class="md-subheading">&nbsp;/ Workshop 0x0</span>

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

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent md-title" md-elevation="0">
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
};
</script>

<style lang="scss">
  .page-container {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
