import { createApp } from 'vue';

createApp({
	data() {
		return{
			paragrafo1:true,
			array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
			livro: {
				titulo: 'O Senhor dos Anéis',
				autor: 'J.R.R. Tolkiens',
				volume: '3'
			},
			aluno: {
				id: 10,
				nome: 'Maria',
				notas: [7.67, 8.33, 6.98, 9.21]
			},
			alunos: [
				{
					id: 11,
					nome: 'Davidson',
					notas: [4, 3, 9, 7]
				},
				{
					id: 10,
					nome: 'Maria',
					notas: [7.67, 8.33, 6.98, 9.21]
				}
			]
		} 
	},
	methods: {

	},
}).mount('#desafio')