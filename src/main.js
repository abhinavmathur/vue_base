// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import VueFetch, { $fetch } from './plugins/fetch'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import * as filters from './filter/filters'

Vue.config.productionTip = false;

for(const key in filters){
  Vue.filter(key, filters[key])
}

Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
