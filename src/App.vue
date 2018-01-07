<template>
  <div class="app" id="app">
    <navigation></navigation>
    <div id="content" class="app-content" role="main">
      <headernav></headernav>
      <div class="content-main" id="content-main">
        <div class="padding">
        <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Navigation from '@/components/Navigation';
  import Transactions from './components/Transactions';
  import Accounts from './components/Accounts';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'app',
    components: {
      headernav: Header,
      Navigation,
      Transactions,
      Accounts
    },
    methods:{
      ...mapActions([
        'getAccounts'
      ])
    },
    created: function () {
      this.getAccounts();
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
