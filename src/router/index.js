import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Developer from '../views/Developer.vue';
import Writer from '../views/Writer.vue';
import Cosplayer from '../views/Cosplayer.vue';
import IVCalculator from '../views/IVCalculator.vue';
import FEStatCalculator from '../views/FEStatCalculator.vue';
import FEStatSimulator from '../views/FEStatSimulator.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/developer',
    name: 'developer',
    component: Developer
  },
  {
    path: '/writer',
    name: 'writer',
    component: Writer
  },
  {
    path: '/cosplayer',
    name: 'cosplayer',
    component: Cosplayer
  },
  {
    path: '/iv_calculator',
    name: 'iv_calculator',
    component: IVCalculator
  },
  {
    path: '/fe_stat_calculator',
    name: 'fe_stat_calculator',
    component: FEStatCalculator
  },
  {
    path: '/fe_stat_simulator',
    name: 'fe_stat_simulator',
    component: FEStatSimulator
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
