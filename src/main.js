// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import moment from 'moment'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Paginate from 'vuejs-paginate'
import App from './App'
import store from './store/index'
import router from './router'

require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/font-awesome/css/font-awesome.css')
require('./assets/css/app.css')

require('../node_modules/bootstrap/dist/js/bootstrap')
require('../node_modules/chart.js')

Vue.use(VueResource);
Vue.component('paginate', Paginate)
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    moment.locale('de');
    return moment(String(value)).format('ll')
  }
});

Chart.defaults.global.defaultColor = 'rgba(256, 0, 0, 0.5)';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
