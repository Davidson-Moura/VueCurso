import Vue from 'vue'
import axios from 'axios'

//Instancia de forma global
//axios.defaults.baseURL = "https://vue-curso-da013-default-rtdb.firebaseio.com" //Banco de dados

//headers de forma global
//axios.defaults.headers.common['Authorization'] = "token" //colocar o token para todos os tipos de requisição
//axios.defaults.headers.get['Accepts'] = "application/json" //coloca somente na requisições do tipo get

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL : "https://vue-curso-da013-default-rtdb.firebaseio.com", //Banco de dados
            headers:{
                'Authorization': "token", //colocar o token para todos os tipos de requisição
                get:{
                    'Accepts': "application/json" //coloca somente na requisições do tipo get
                }
            }
        })
        Vue.prototype.$http.interceptors.request.use(//intercepta as requisições antes de serem feitas
            //Podem ser usadas para colocar o token na requisição
            settings =>{
                console.log(settings.method); //post,get,delete...
                return settings;
            },
            erro => { // caso de erro
                console.log(erro);
                Promise.reject(erro); // rejeitar a promessa
            }
        )

        Vue.prototype.$http.interceptors.response.use(
            //pode ser usado para redirecionar o usuário para o login caso o resultado da requisição seja não autorizado
            resp =>{
                /*const arr = [];
                for(let chave in resp.data){
                    arr.push({
                        id:chave,
                        ...resp.data[chave]
                    });
                }
                resp.data = arr;
                Este codigo ajusta os dados recebidos
                */

                return resp;
            },
            error =>{
                Promise.reject(error);
            }
        )

    }
})
