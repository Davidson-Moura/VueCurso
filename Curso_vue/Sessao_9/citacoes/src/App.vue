<template>
	<div id="app">
		<keep-alive><!--Faz o componente não ser destruido ao alterar o componente.Os componentes filhos tbm recebem esse efeito-->
			<component :is="componente"></component> <!--componente dinâmico-->
		</keep-alive>
		<button v-if="componente != 'Sobre'" @click="componente = 'Sobre'">Sobre</button>
		<button v-else @click="componente = 'Citacoes'">Citação</button>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data(){
		return {
			componente: "Citacoes"
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>