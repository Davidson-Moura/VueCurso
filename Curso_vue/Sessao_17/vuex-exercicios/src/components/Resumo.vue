<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'; //mapeia os getters do vuex

export default {
    computed: mapGetters('carrinho',{
        total: 'valorTotal'
    }),
    //computed:mapGetters(['valorTotal']), //ao usar tem que ser chamado pelo nome 'valorTotal'
    /*computed: {
        total() {
            return this.$store.getters.valorTotal;
        },
        produtos(){
            return this.$store.state.produtos;
        }
    },*/
    data() {
        return {
        }
    }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
