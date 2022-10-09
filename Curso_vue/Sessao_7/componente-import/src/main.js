import { createApp } from 'vue'
import App from './App.vue'
import ContadorApp from './components/ContadorApp'

let vue = createApp(App);
vue.component("app-contador",ContadorApp); // Adicionar o component de forma global
vue.mount('#app')
