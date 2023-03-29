import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'

/**
 * Componentes de la seccion "fundamentos"
 */
import FundamentalsView from '../views/fundamentos/FundamentalsView.vue'
import AlgorithmsView from '../views/fundamentos/AlgorithmsView.vue'
import SoftwareCycleView from '../views/fundamentos/SoftwareCycleView.vue'
import IdentifiersView from '../views/fundamentos/IdentifiersView.vue'
import TypeOfDataView from '../views/fundamentos/TypeOfDataView.vue'
import TypeOfOperatorsView from '../views/fundamentos/TypeOfOperatorsView.vue'
import SequentialStructureView from '../views/fundamentos/SequentialStructureView.vue'
import SelectiveStructureView from '../views/fundamentos/SelectiveStructureView.vue'

/**
 * Componentes de la seccion "estructuras"
 */
import RepetitiveStructureView from '../views/estructuras/RepetitiveStructureView.vue'
import GlobalVariablesView from '../views/estructuras/GlobalVariablesView.vue'
import DefinedFuntionsView from '../views/estructuras/DefinedFuntionsView.vue'
/**
 * Componentes de la seccion "arreglos"
 */
import TypeOfDataListView from '../views/arreglos/TypeOfDataListView.vue'
import OperationsView from '../views/arreglos/OperationsView.vue'
import ParallelListsView from '../views/arreglos/ParallelListsView.vue'
import LoopsView from '../views/arreglos/LoopsView.vue'
import BibliographyView from '../views/arreglos/BibliographyView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  /**
   * Se crean las rutas de los componentes de la seccion "fundamentos"
   */
  {
    path: '/fundamentalsView',
    name: 'FundamentalsView',
    component: FundamentalsView
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
  /**
   * Se crean las rutas de los componentes de la seccion "estructuras"
   */
  {
    path: '/repetitiveStructureView',
    name: 'RepetitiveStructureView',
    component: RepetitiveStructureView
  },
  {
    path: '/globalVariablesView',
    name: 'GlobalVariablesView',
    component: GlobalVariablesView
  },
  {
    path: '/definedFuntionsView',
    name: 'DefinedFuntionsView',
    component: DefinedFuntionsView
  },
  /**
  * Se crean las rutas de los componentes de la seccion "arreglos"
  */
  {
    path: '/typeOfDataListView',
    name: 'TypeOfDataListView',
    component: TypeOfDataListView
  },
  {
    path: '/operationsView',
    name: 'OperationsView',
    component: OperationsView
  },
  {
    path: '/parallelListsView',
    name: 'ParallelListsView',
    component: ParallelListsView
  },
  {
    path: '/loopsView',
    name: 'LoopsView',
    component: LoopsView
  },
  {
    path: '/bibliographyView',
    name: 'BibliographyView',
    component: BibliographyView
  }  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
