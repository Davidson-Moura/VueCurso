import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter',valor =>{
	return valor.split('').reverse().join('');
})

Vue.mixin({
	data(){
		return {
			global: "Atributo de acesso em qualquer componente"
		}
	},
	created(){
        console.log("created mixin Global"); //Usada em cada componente e no instaciamento do Vue logo abaixo
    }
})

new Vue({
	render: h => h(App)
}).$mount('#app')
