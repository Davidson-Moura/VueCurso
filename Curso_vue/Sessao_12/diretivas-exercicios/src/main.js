import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//para usar a diretiva usamos o nome v-destaque
Vue.directive('destaque',{
	bind(el,binding, vnode){

		//v-destaque:fundo.atrasar
		let atraso = 0;
		if(binding.modifiers['atrasar']) atraso = 3000
		setTimeout(()=>{
			//el.style.backgroundColor = "green"
			if(binding.arg === 'fundo'){ // v-destaque:fundo
				el.style.backgroundColor = binding.value
			}else{
				el.style.color = binding.value
			}
		},atraso);

	}
})

/*
Gatilhos (Diretivas)
--------------------------
bind = é chamado quando a diretiva é ligada ao elemento
EX: bind(el,binding, vnode)
el = elemento
binding = é o parametro de configuração da diretiva
vnode = nó virtual
--------------------------
inserted = quando o elemento é inserido no nó pai
EX: inserted(el,binding, vnode)
--------------------------
update = quando o componente é atualizado (antes dos filhos). Garante que o elemento foi atualizado mas os nó filhos não
EX: update(el,binding, vnode,oldVNode)
--------------------------
componentUpdated = quando o componente é atualizado depois dos filhos. Usado para garantir que os filhos do nó pai sejam atualizados
EX: componentUpdated(el,binding, vnode,oldVNode)
--------------------------
unbind = quando vc quer desvincular a diretiva do elemento
EX: unbind(el,binding, vnode)

*/


new Vue({
	render: h => h(App),
}).$mount('#app')
