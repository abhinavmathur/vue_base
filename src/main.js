// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppLayout from './components/AppLayout'
import router from './router/index'
import Loading from './components/Loading'
import VueFetch, { $fetch } from './plugins/fetch'
import state from './state/state'
import VueState from './plugins/state'
import SmartForm from './components/SmartForm'
import FormInput from './components/FormInput'
import * as filters from './filters'


Vue.component('SmartForm', SmartForm);
Vue.component('FormInput', FormInput);
Vue.component('Loading', Loading)
Vue.config.productionTip = false;
Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
});
Vue.use(VueState, state);
for (const key in filters) {
  Vue.filter(key, filters[key])
}

/* eslint-disable no-new */

async function main(){
  try {
    state.user = await $fetch('user')
  } catch (e) {
    console.warn(e)
  }

  new Vue({
    el: '#app',
    data: state,
    router,
    template: '<AppLayout/>',
    components: {
      AppLayout
    }
  })
}


main();
