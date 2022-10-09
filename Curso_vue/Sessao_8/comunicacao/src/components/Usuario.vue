<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>{{nome}}</p>
        <p>{{idade}}</p>
        <hr>
        <div class="componentes">
            <!--this.$emit('nomeMudou',"Maicon") passou o valor $event = "Maicon"-->
            <!--:funcCallBack="funcAlteraNome" passamos a função para alterar o nome-->
            <app-usuario-info
                :idade="idade"
                :nome="nome" @nomeMudou="nome = $event"
                :funcCallBack="funcAlteraNome"/> <!--Passamos o nome para o componente-->
            <app-usuario-editar :idade="idade" /><!--@idadeMudou="idade = $event"-->
        </div>
        <button @click="alteraNome">Alterar Nome</button>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return {
            nome:"pedro",
            idade: 21
        }
    },
    methods:{
        alteraNome(){
            this.nome = "Ana";
        },
        funcAlteraNome(novoNome){
            this.nome = novoNome;
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
