import Vue from 'vue'
import Vuex from 'vuex'
import generals from './modules/generals'
import catalog from './modules/catalog'

Vue.use(Vuex);

export default new Vuex.Store({modules: { generals, catalog }})
