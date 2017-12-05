// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

Vue.filter('display_length', (text) => {
  if(text.length !== 0){
    return text + ' (' + text.length + ')'
  }
});

Vue.mixin({
  computed: {
    reversedText() {
      if(this.text !== 0){
        let str = this.text.split('').reverse().join('').toLocaleLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
