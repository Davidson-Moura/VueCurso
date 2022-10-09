<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva'"></p>
		<p v-html="'Usando <strong>html</strong>'"> </p>
		<hr>
		<p v-destaque="cor" v-text="'Diretiva Personalizada'"></p>
		<p v-destaque="'red'" v-text="'Diretiva Personalizada'"></p>

		<p v-destaque:fundo="'red'" v-text="'Diretiva Personalizada'"></p>

		<p v-destaque:fundo.atrasar="'blue'" v-text="'Diretiva Personalizada'"></p>
		<p v-destaque.atrasar="'blue'" v-text="'Diretiva Personalizada'"></p>

		<p v-destaque-Local.atrasar.alternar="{cor1:'green', cor2: 'blue', atraso: 1000, interval:200}" v-text="'Local'"></p>
		
	</div>
</template>

<script>
export default {
	directives:{
		"destaque-Local":{
			bind(el,binding, vnode){
				const aplicarCor = cor =>{
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					}else{
						el.style.color = cor
					}
				}
				let atraso = 0;
				if(binding.modifiers['atrasar']) atraso = 3000
				const cor1 = binding.value.cor1;
				const cor2 = binding.value.cor2;
				let corAtual = cor1;

				setTimeout(()=>{
					if(binding.modifiers['alternar']){
						setInterval(()=>{
							corAtual = corAtual === cor1 ? cor2 : cor1;
							aplicarCor(corAtual);
						},binding.value.interval);
					}else{
						aplicarCor(cor1)
					}

				},binding.value.atraso);
			}
		}
	},
	data(){
		return {
			cor: "blue"
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
</style>
