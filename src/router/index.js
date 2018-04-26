import Vue from 'vue';
import Router from 'vue-router';
import Listing from '@/components/Listing';
import Voting from '@/components/Voting';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Listing',
      component: Listing,
    },
    {
      path: '/:address',
      name: 'Voting',
      component: Voting,
    },
  ],
});
