<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-mudanca:click="acao">Apertar</button>
		<p v-mudanca:mouseenter="exibe" v-mudanca:mouseleave="exibeSaida" >aki</p>
	</div>
</template>

<script>
export default {
	directives:{
		mudanca:{
			bind(el, binding){
				/*el.onclick= function(e){
					binding.value();
				}*/

				const tipo = binding.arg
				const fn = binding.value

				el.addEventListener(tipo,fn) // addEventListener é do javascript web
			}
		}
	},
	methods:{
		acao(){
			alert("Foi executado");
		},
		exibe(){
			console.log("mouse entrou");
		},
		exibeSaida(){
			console.log("mouse Saiu");
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
