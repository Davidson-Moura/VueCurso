import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
/* import Usuario from './components/usuario/Usuario'
import UsuarioList from './components/usuario/UsuarioList'
import UsuarioDetail from './components/usuario/UsuarioDetail' */
//import UsuarioEdit from './components/usuario/UsuarioEdit'
import Menu from './components/template/Menu.vue'


Vue.use(Router);

//faz com que o carregamento inicial seja mais leve
const UsuarioEdit = () => import('./components/usuario/UsuarioEdit'); //Faz com que o Component só seja baixado no front quando o component for ser usado. O responsavel por isso é o 0.js, podemos observar isso no network do front

//É interessante carregar os componentes da msm tela juntos. Para isso usamos o comentário 'webpackChunkName: "usuario"'. Os 3 arquivos serão apenas 1 arquivo carregado no front
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario');
const UsuarioList = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioList');
const UsuarioDetail = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetail');

/*
https://router.vuejs.org/guide/essentials/history-mode.html
Modos:
-hash
    http://localhost:8080/#/...
-history
    http://localhost:8080/...
*/

const router =  new Router({
    mode:'history',
    scrollBehavior(to, from, savedPosition){ 
        if(savedPosition){
            return savedPosition
        }
        if(to.hash){
            return {selector: to.hash }; //Faz a passa ir direto para o elemento com aquele id, passado no hash
        }
        return {x:0, y:0 }; //forçando descer 0px
    },
    routes: [
        {
            name:"inicio",
            path: '/',
            components:{
                default:Inicio,
                menu:Menu
            }
        },
        {
            path: '/usuario',
            component: Usuario
        },
        {
            path: '/usuario', //passar info na rota
            component: Usuario,
            props:true,
            children:[
                {path:'list', component: UsuarioList, 
                    beforeEnter:(to,from, next)=>{
                        console.log("antes de entrar na rota /usuario/list");
                        next(vm=>{ //vm = instancia do component
                            console.log(vm.id);
                        });
                    }},
                {path:':id', component: UsuarioDetail,props:true,   //props:true => passa o valor id como propriedade (props:['id'])
                    beforeEnter:(to,from, next)=>{
                        console.log("antes de entrar na rota /usuario/:id");
                        next();
                    }},
                {path:':id/editar', component: UsuarioEdit,props:true, name:'editUser'},
            ]
        },
        {
            path: '/redirecionar',
            redirect: "/usuario" //redirecionar para usuario
        },
        {
            path: '*', //redirecionar todas as rotas que não existem // redirect não remove a query da rota
            redirect: "/" //para a rota inicio
        }
    ]
});

router.beforeEach((to,from, next)=>{
    console.log("antes de entrar nas rotas");
    next();//só vai para a rota se chamarmos o next
    //next("/usuario"); //podemos passar a rota que desejamos
    //next(false); //não vai para a proxima tela
});

export default router;