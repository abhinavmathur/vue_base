require('babel-polyfill');
import Vue from 'vue'
import App from './App'
import { store } from './store/store'


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
