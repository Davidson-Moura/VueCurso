<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ retornaNome() }}</strong></p>
        <p>{{idade}}</p>
        <button @click="alteraNome">Alterar</button>
        <button @click="callBack">callBack</button>
    </div>
</template>

<script>
import barramento from "@/barramento"

export default {
    props:{
        nome: String, //Valida o valor que foi recebido
        nomeOrArray : [String, Array], // pode ser mais de um formato
        /*nomeRequirido: {
            type: String,
            required: true
        },*/
        nomePadao: {
            type: String,
            //default: "Lucas"
            default: function(){
                return "bb"+"aa";
            }
        },
        funcCallBack: Function,
        idade: Number
    }, //Recebemos a propriedade passada pelo componente pai
    data(){
        return {
            nomeOriginal: this.nome // gravou o primeiro valor do nome em uma propriedade
        }
    },
    methods:{
        retornaNome(){
            return this.nome // nome se torna uma propriedade do componente
        },
        alteraNome(){
            this.$emit('nomeMudou',"Maicon"); //Dizendo pro pai que o nome mudou
            //podemos passar um objeto no lugar de "Maicon"
        },
        callBack(){
            this.funcCallBack("Maria");//Chamar uma função do pai diretamente passada para alterar nome
        },
    },
    created(){
        /*barramento.$on("idadeMudou", (idade) => {
            this.idade += idade;
        });*/
        barramento.idadeMudou((idade) => {
            this.idade += idade;
        });
    }
}//nomes de propriedades são case-sensitive

</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
