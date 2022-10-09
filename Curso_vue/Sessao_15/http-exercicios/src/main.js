import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'

import './plugins/bootstrap-vue'

/*
Para instalar o axios rode o comando 'npm i --save axios'
-O axios é relacionado as requisições ajax
*/
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
