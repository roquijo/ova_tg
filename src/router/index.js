import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlgorithmsView from '../views/AlgorithmsView.vue'
import SoftwareCycleView from '../views/SoftwareCycleView.vue'
import IdentifiersView from '../views/IdentifiersView.vue'
import TypeOfDataView from '../views/TypeOfDataView.vue'
import TypeOfOperatorsView from '../views/TypeOfOperatorsView.vue'
import SequentialStructureView from '../views/SequentialStructureView.vue'
import SelectiveStructureView from '../views/SelectiveStructureView.vue'

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
  ,
  {
    path: '/typeOfDataView',
    name: 'TypeOfDataView',
    component: TypeOfDataView
  },
  {
    path: '/typeOfOperatorsView',
    name: 'TypeOfOperatorsView',
    component: TypeOfOperatorsView
  },
  {
    path: '/sequentialStructureView',
    name: 'SequentialStructureView',
    component: SequentialStructureView
  },
  {
    path: '/selectiveStructureView',
    name: 'SelectiveStructureView',
    component: SelectiveStructureView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
