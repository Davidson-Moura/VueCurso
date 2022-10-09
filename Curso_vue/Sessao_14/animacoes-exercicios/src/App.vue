<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<span>
			<b-select v-model="typeAnimation">
				<option value="fade">Fade</option>
				<option value="slide">Slide</option>
			</b-select>
			<b-button  variant="primary" @click="exibir = !exibir" class="mb-4">Mostrar</b-button>
		</span>
		<hr>
		<transition :name="typeAnimation" appear> <!-- appear faz a transição acontecer quando a tela é carregada-->
			<b-alert variant="info" show v-if="exibir"> {{msg}} </b-alert>
		</transition>
		<transition :name="typeAnimation" type="animation" appear> <!-- type="animation" faz com que apos o tempo do css "animation" ele retire o elemento da DOM, se usassemos o "transition" ele respeitaria o tempo da "transição" terminar os 6s-->
			<b-alert variant="info" show v-show="exibir"> {{msg}} </b-alert>
		</transition>

		<transition 
			enter-active-class="animated fadeInRightBig"
			leave-active-class="animated fadeOutRight"
			appear> <!-- type="animation" faz com que apos o tempo do css "animation" ele retire o elemento da DOM, se usassemos o "transition" ele respeitaria o tempo da "transição" terminar os 6s-->
			<b-alert variant="info" show v-show="exibir"> {{msg}} </b-alert>
		</transition>

		<transition :name="typeAnimation" mode="out-in"> <!-- mode="out-in",  out-in = primeiro sair o elemento depois entrar o novo. in-out = entra antes de sair -->
			<b-alert variant="info" show v-if="exibir" key="info"> {{msg}} </b-alert>
			<b-alert variant="warning" show v-else key="warning"> {{msg}} </b-alert>
		</transition>

		<hr>
		<b-button @click="exibir2 = !exibir2">Alternar</b-button>
		<!-- :css="false" desativa o css para esse elemento-->
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"			
		>
			<div v-if="exibir2" class="caixa"><!-- o elemento só aparece se tiver o show, v-if ou v-show-->

			</div>
		</transition>

		<hr>
		<b-button variant="primary" @click="componentSelecionado = 'AlertInfo'">Info</b-button>
		<b-button variant="primary" @click="componentSelecionado = 'AlertaAdvertencia'">AlertaAdvertencia</b-button>

		<hr>
		<transition name="fade" mode="out-in">
			<component :is="componentSelecionado"></component >
		</transition>

		<hr>
		<b-button @click="adicionarAluno">Add</b-button>
		<!-- tag="div" Ecolhe qual tag html será usada para encapsular os elementos -->
		<transition-group tag="div" name="fade"> <!--Só funciona se tiver o :key-->
			<b-list-group v-for="(aluno,i) in alunos" :key="aluno" >
				<b-list-group-item @click="removeAluno(i)">{{aluno}}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>
<!-- Animate.css
	<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  classes usadas:
  -animate__fadeInRight = "animated fadeInRightBig"
  -animate__fadeOutRight
-->

<script>

/*
	#Antes de entrar
		-before-enter //antes de iniciar a animação
		-enter //inicio da animação
		-enter-cancelled //cancelado no meio da animação
		-after-enter // quando termina a animação
	#Antes de saida
		-before-leave //antes de iniciar a animação
		-leave //inicio da animação
		-leave-cancelled //cancelado no meio da animação
		-after-leave // quando termina a animação
*/

import AlertaAdvertencia from './AlertaAdvertencia.vue';
import AlertInfo from './AlertInfo.vue';

export default {
	components: {
		AlertaAdvertencia,
		AlertInfo
	},
	data(){
		return{
			alunos:['Roberta','Diego','Davidson'],
			msg: "Informando o usuário",
			exibir:true,
			typeAnimation: "fade",
			exibir2:true,
			larguraBase:0,
			componentSelecionado: "AlertInfo"
		}
	},
	methods:{
		adicionarAluno(){
			const s = Math.random().toString(36).substring(2);
			this.alunos.push(s);
		},
		removeAluno(indice){
			this.alunos.splice(indice,1);
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `0px`;
		},
		enter(el,done){ //done é a função que avisa que a animação terminou
			let rodada = 1;
			const temporizador = setInterval(()=>{
				const novaLargura = this.larguraBase + rodada * 10;
				el.style.width = `${novaLargura}px`;
				rodada++;
				if(rodada > 30){
					clearInterval(temporizador);
					done();
				}
			},20);
			done();
		},
		afterEnter(el){
			
		},
		enterCancelled(el){
			
		},
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`;
		},
		leave(el,done){
			let rodada = 0;
			const temporizador = setInterval(()=>{
				const novaLargura = this.larguraBase - rodada * 10;
				el.style.width = `${novaLargura}px`;
				rodada++;
				if(rodada > 30){
					clearInterval(temporizador);
					done();
				}
			},20);
		},
		afterLeave(el){
			
		},
		leaveCancelled(el){
			
		}
	}
}
</script>

<style>
.caixa{
	height: 100px;
	width: 300px;
	margin:30px auto;
	background-color: lightgreen;
}
/*
formas de animar entrada de elemento:
	-mudança de classe (*-enter)
	-enquanto o processo acontece (*-enter-active)
	-como termina (*-enter-to)

formas de animar saída de elemento:
	-primeiro frame da animação (*-leave)
	-enquanto acontece (*-leave-active)
	-final da animação (*-leave-to)

padrões de nomes classes:
	.fade-enter
	.fade-enter-active
	.fade-enter-to
	.fade-leave
	.fade-leave-active
	.fade-leave-to
	#Usada no elemento como só 'fade' <transition name="fade">
*/

.fade-enter{
	opacity: 0;
}
.fade-enter-active{
	transition: opacity 1s;
}
.fade-enter-to{
	opacity: 1;
}
.fade-leave{
	opacity: 1;
}
.fade-leave-active{
	position: absolute; /*Necessario para reorganizar a lista*/
	width: 100%; /*Necessario para ajustar reorganizar a lista*/
	transition: opacity 2s;
}
.fade-leave-to{
	opacity: 0;
}
.fade-move{
	transition: transform 1s; /*Ajustar os outros itens depois da alteração na lista de alunos */
}
/*
Podemos agrupar as classes iguais
	.fade-enter , .fade-leave-to{
		opacity: 0;
	}
*/

@keyframes slide-in{
	from { transform: translateY(40px);}
	to {transform: translateY(0);}
}
@keyframes slide-out{
	from {transform: translateX(0);}
	to { transform: translateX(100%);}
}
.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 6s;
}
.slide-leave-active{
	animation: slide-out 2s ease;
	transition: opacity 6s;
}

.slide-enter , .slide-leave-to{
	opacity: 0;
}


#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
</style>
