export default{
    state:{
        quantidade:0,
        preco: 0
    },
    mutations:{ //setters // responsavel apenas pela alteração do estado
        setPreco(state,payload){
            state.preco = payload;
        },
        setQtd(state,payload){
            state.quantidade = payload;
        }
    }
}