import { createApp } from 'vue';

createApp({
	data() {
		return {
			classAlterned:"",
			classA:"destaque",
			classB:"vermelho",
			classDigitada: "destaque",
			apply4:false,
			class4:"tamanho",
			styles5:"background-Color: purple",
			lenghCarregado: 0
		}
	},
	computed:{
	},
	methods: {
		iniciarEfeito(){
			setInterval(()=>{
				console.log("mudar");
				this.classAlterned = this.classAlterned == 'destaque'?"destaque2": "destaque";
			},100)
		},
		iniciarProgresso(){
			this.lenghCarregado = 0;
			const intVal = setInterval(()=>{
				if(this.lenghCarregado == 600) clearInterval(intVal)
				this.lenghCarregado++;
			},10);
		}
	},
}).mount('#desafio')
