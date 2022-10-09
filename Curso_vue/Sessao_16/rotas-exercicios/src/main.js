import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//instalando o vue rotas
//npm i --save vue-router@3.0.2 -E

Vue.config.productionTip = false

new Vue({
  router: router, //registrando o serviço de rotas
  render: h => h(App),
}).$mount('#app')
