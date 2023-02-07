import Vue from 'vue'
// import App from './App.vue'
import Login from './views/Login.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from './store'
import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/css/main.css'

const bounceTransition = createSimpleTransition('bounce-transition')

Vue.component('bounce-transition', bounceTransition)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(Login),
}).$mount('#app')
