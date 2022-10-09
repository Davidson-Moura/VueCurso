<template>
    <div class="usuario">
        <router-view/>
        <button @click="irParaInicio" sucesso>voltar</button>
    </div>
</template>

<script>
export default{
    data(){
        return {
            //id: this.$route.params.id
        }
    },
    methods:{
        irParaInicio(){
            this.$router.push('/');
            //this.$router.push({name:"inicio"}); //pelo nome da rota
            //this.$router.push({path:'/'});
        },

    },
    /*watch:{ //observer
        $route(to,from){
            this.id =  to.params.id;
        }
    }*/

}

</script>

<style>
[primary]{
    color: white;
    background-color: rgb(0, 51, 128);
}
[sucesso]{
    color: white;
    background-color: green;
}
</style>