import Vue from 'vue'
import Vuex from 'vuex'
import generals from './modules/generals'

Vue.use(Vuex);

export default new Vuex.Store({modules: { generals }})
