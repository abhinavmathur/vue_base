import Home from '../components/Home'
import FAQ from '../components/FAQ'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)


const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/faq', name: 'faq', component: FAQ}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
