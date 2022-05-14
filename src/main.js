import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TheHeader from '@/components/TheHeader.vue'

Vue.config.productionTip = false
Vue.component('TheHeader', TheHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
