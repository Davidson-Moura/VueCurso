<template>
    <div class="usuario-list">
        <h2>User Detail</h2>
        <ul class="list">
            <li class="item">user {{id}}</li>
        </ul>
        <!--<router-link tag="button" primary :to="`/usuario/${id}/editar`">-->
        <router-link tag="button" primary :to="{name:'editUser',params:{id:id}, 
            query:{completo:true, lingua:'pt'}, hash:'#rodape'}"> <!--Navegando pelo pelo nome da rota--><!--hash é o id do elemento da tela de editar-->
            Editar 
        </router-link>
    </div>
</template>

<script>
export default{
    props:['id'],
    beforeRouteEnter(to,from,next){
        console.log("antes de entrar na rota no component");
        let authenticate = false;
        //if(!authenticate) { console.log("não autenticado"); return;}
        next(vm=>{ //vm = instancia do component
            console.log(vm.id);
        });
    }
}

</script>

<style>

</style>