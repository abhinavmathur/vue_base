// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppLayout from './components/AppLayout'
import router from './router/index'
import Loading from './components/Loading'
import VueFetch from './plugins/fetch'
import state from './state/state'
import VueState from './plugins/state'
import SmartForm from './components/SmartForm'

Vue.component('SmartForm', SmartForm);
Vue.config.productionTip = false;
Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
});
Vue.use(VueState, state);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: state,
  router,
  template: '<AppLayout/>',
  components: {
    AppLayout,
    Loading
  }
})

console.log(this.$state)
