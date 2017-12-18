import Home from '../components/Home'
import FAQ from '../components/FAQ'
import TicketsLayout from '../components/TicketsLayout'
import Tickets from '../components/Tickets'
import NewTicket from '../components/NewTicket'
import Ticket from '../components/Ticket'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Vue from 'vue'
import NotFound from '../components/NotFound'
import state from "../state/state";

Vue.use(VueRouter);


const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/faq', name: 'faq', component: FAQ},
  { path: '/login', name: 'login', component: Login, meta: { guest: true }},
  { path: '/tickets', component: TicketsLayout, meta: { private: true }, children: [
      { path: '', name: 'tickets', component: Tickets },
      { path: 'new', name: 'new-ticket', component: NewTicket},
      { path: ':id', name: 'ticket', component: Ticket,  props: true}
    ] },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(r => r.meta.private) && !state.user){
    next({ name: 'login', params: {
      wantedRoute: to.fullPath
      }
    });
    return
  }
  if(to.matched.some(r => r.meta.guest) && state.user){
    next({ name: 'home' })
    return
  }
  next()
});

export default router;
