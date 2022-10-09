<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>{{idade}}</p>
        <button @click="altIdade">altera idade</button>
    </div>
</template>

<script>
import barramento from "@/barramento"
export default {
    props:{
        idade: Number
    },
    methods:{
        altIdade(){
            console.log(this.idade)
            //barramento.$emit("idadeMudou", 33);
            barramento.mudarIdade(33);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
