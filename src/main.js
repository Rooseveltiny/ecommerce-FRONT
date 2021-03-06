import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router/router'
import './dialogs'
import './globalComponents'
import './notifications'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
