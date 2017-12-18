import Home from '../components/Home'
import FAQ from '../components/FAQ'
import TicketsLayout from '../components/TicketsLayout'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Vue from 'vue'
import state from "../state/state";

Vue.use(VueRouter);


const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/faq', name: 'faq', component: FAQ},
  { path: '/login', name: 'login', component: Login, meta: { guest: true }},
  { path: '/tickets', name: 'tickets', component: TicketsLayout, meta: { private: true } }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if(to.meta.private && !state.user){
    next({ name: 'login', params: {
      wantedRoute: to.fullPath
      }
    });
    return
  }
  if(to.meta.guest && state.user){
    next({ name: 'home' })
    return
  }
  next()
});

export default router;
