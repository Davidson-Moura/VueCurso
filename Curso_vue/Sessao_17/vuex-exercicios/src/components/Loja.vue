<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

//import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed:{
        quantidade(){
            return this.$store.state.parametros.quantidade;
        },
        preco(){
            return this.$store.state.parametros.preco;
        }
    },
    methods: {
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            //this.$store.state.produtos.push(produto);
            //this.$store.commit('adicionarPorduto', produto); //Forma correta, mutations:{ //setters

            // eslint-disable-next-line //Faz ignorar problema no compilador do vue
            //console.log(produto)


            //this.adicionarPorduto(produto); // por conta do ...mapMutations(['adicionarPorduto']) podemos fazer issso

            this.adicionarProduto(produto);// adicionando pela actions
        },
        //...mapMutations(['adicionarPorduto']), // ... tira as funções do objeto e joga pra fora

        ...mapActions('carrinho',["adicionarProduto"]) //carrinho é o namespace definido no store
        //podemos substituir por
        //adicionarproduto(produto){ this.$store.dispatch("adicionarPorduto", produto); }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
