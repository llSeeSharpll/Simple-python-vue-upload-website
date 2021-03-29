import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
