import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlgorithmsView from '../views/AlgorithmsView.vue'
import SoftwareCycleView from '../views/SoftwareCycleView.vue'
import IdentifiersView from '../views/IdentifiersView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/algorithmsView',
    name: 'AlgorithmsView',
    component: AlgorithmsView
  },
  {
    path: '/softwareCycleView',
    name: 'SoftwareCycleView',
    component: SoftwareCycleView
  },
  {
    path: '/identifiersView',
    name: 'IdentifiersView',
    component: IdentifiersView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
