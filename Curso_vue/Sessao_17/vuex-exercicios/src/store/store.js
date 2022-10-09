import Vue from 'vue';
import Vuex from 'vuex';

import carrinho from "./modulos/carrinho"
import parametros from "./modulos/parametros"

import * as getters from "./getters"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        nome:"davi",
        sobrenome: "Moura"
    },
    getters:{
        ...getters
    },
    modules: { carrinho, parametros}
    /*state:{ // modulos acima ficam dessa forma
        carrinho:{
            produtos: []
        },
        parametros:{
            quantidade:0,
            preco:0
        }
    }*/
})