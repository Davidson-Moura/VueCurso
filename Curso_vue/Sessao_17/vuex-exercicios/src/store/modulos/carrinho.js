export default{
    namespaced: true, //ativar namespaces para evitar conflito de nomes entre o modulos
    state:{
        produtos:[
        ]
    },
    getters:{
        valorTotal(state/*, getters, rootState*/){ // recebe por padrão o state // rootState acesso aos estados de outros modulos
            return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0);
        }
    },
    mutations:{ //setters // responsavel apenas pela alteração do estado
        adicionarPorduto(state,payload){ // só podemos passar 1 unico parametro adicionar -> payload
            state.produtos.push(payload); // state só tem acesso aos estados deste modulo.
        }
    },
    actions:{ // Responsavel pela regra do negocio antes de fazer a alteração atravez da mutations // tudo que for assincrono na alteração tem que ser aqui
        /*adicionarProduto(context, payload){ // podemos => adicionarProduto({ commit }, payload){ => extraiu a função commit de context
            setTimeout(() => { //context.state só tem acesso aos estados deste modulo. para acessar outro temos que usar o context.rootState
                context.commit("adicionarPorduto",payload); // adicionarPorduto da mutarions
            }, 1000);
        }*/
        adicionarProduto:{
            root: false, // se marcada true, faz com que essa função seja colocado no raiz do store, não precisando usar o namespace para acessar
            handler: function (context, payload){ // podemos => adicionarProduto({ commit }, payload){ => extraiu a função commit de context
                setTimeout(() => { //context.state só tem acesso aos estados deste modulo. para acessar outro temos que usar o context.rootState
                    context.commit("adicionarPorduto",payload); // adicionarPorduto da mutarions
                }, 1000);
            }
        }
    }
}