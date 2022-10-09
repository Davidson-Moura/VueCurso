<template>
	<div id="app">
		<h1>Filtros & Mixins</h1> <!-- Preferencialmente usar propriedades computadas no lugar dos filtros-->
		<hr>
		<p>{{cpf | cpfFormat | inverter}}</p> <!--Podemos encadear mais de um filtro-->
		<input type="text" :value="cpf | cpfFormat"> <!--v-model não aceita o filtro, o melhor nesse caso é variaveis computáveis-->
		<input type="text" v-model="cpf"/>
		<hr>
		<Frutas></Frutas>
		<hr>
		<div>
			<ul> <!--Está usando o frutasMixin-->
				<li v-for="fru in frutas" :key="fru" > {{fru}}</li>
			</ul>
			<input type="text" @keydown.enter="add" v-model="fruta">
		</div>
	</div>
</template>

<script>
import frutasMixin from '@/frutasMixin' // @ = caminho absoluto
import Frutas from './Frutas.vue'
export default {
	components:{
		Frutas
	},
	mixins:[frutasMixin], //Podemos passar vários mixin
	filters:{
		cpfFormat(valor){
			const arr = `${valor}`.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			
			return arr.join("");
		}
	},
	data(){
		return{
			cpf:'32454897548'
		}
	},
	created(){
        console.log("created app "+ this.global);
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
