<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome" placeholder="nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="text" size="lg"
					v-model="usuario.email" placeholder="email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click.prevent="salvar" size="lg" variant="primary">Salvar</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-item v-for="(user,id) in usuarios" :key="id">
				<strong>Nome:</strong>{{user.nome}}<br>
				<strong>Email:</strong>{{user.email}}<br>
				<strong>Id:</strong>{{id}}
				<hr>
			</b-list-item>
		</b-list-group>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data(){
		return {
			usuarios:[],
			usuario:{
				nome:'',
				email:''
			}
		}
	},
	methods:{
		/*
		Obs:
		no fire base a url para:
		-excluir: '/usuarios/{id}.json'
		-patch: '/usuarios/{id}.json'
		*/
		salvar(){//usuarios.json é o final da url
			this.$http.post('usuarios.json',{
				nome: this.usuario.nome,
				email: this.usuario.email
			}).then(res => {
				this.usuario.nome = ''
				this.usuario.email = ''
				console.log(res);
				this.onLoadUsers();
			})	
		},
		onLoadUsers(){//faz o get
			this.$http('usuarios.json').then(response=>{
				console.log(response);
				this.usuarios = response.data;
			});
		},
		getLocalDoAxios(){
			axios.get('https://vue-curso-da013-default-rtdb.firebaseio.com/usuarios.json').then(
				resp =>{
					this.usuarios = resp.data;
				}
			)
		}
		/*
		podemos colocar o token da seguinte maneira
		this.$http.defaults.headers.common['Authorization'] = "token";
		*/

	},
	created(){
		this.getLocalDoAxios();
	}
	/*created(){//usuarios.json é o padrão de uma coleção do firebase
		this.$http.post('usuarios.json',{
			nome:"Davidson",
			email:"@gmail"
		}).then(res => console.log(res))
	}*/
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
