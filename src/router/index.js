import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AlgorithmsView from '../views/fundamentos/AlgorithmsView.vue'
import SoftwareCycleView from '../views/fundamentos/SoftwareCycleView.vue'
import IdentifiersView from '../views/fundamentos/IdentifiersView.vue'
import TypeOfDataView from '../views/fundamentos/TypeOfDataView.vue'
import TypeOfOperatorsView from '../views/fundamentos/TypeOfOperatorsView.vue'
import SequentialStructureView from '../views/fundamentos/SequentialStructureView.vue'
import SelectiveStructureView from '../views/fundamentos/SelectiveStructureView.vue'

import RepetitiveStructureView from '../views/estructuras/RepetitiveStructureView.vue'

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
  },
  {
    path: '/repetitiveStructureView',
    name: 'RepetitiveStructureView',
    component: RepetitiveStructureView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
