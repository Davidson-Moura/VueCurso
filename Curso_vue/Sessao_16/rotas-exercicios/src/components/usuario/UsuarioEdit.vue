<template>
    <div class="usuario-list">
        <h2>Edit user : {{id}}</h2>
        <p>{{$route.query.completo? 'sim':'não'}}</p>
        <p>{{$route.query.lingua}}</p>
        <hr>
        <button primary>Confirmar</button>

        <div id="rodape">
            <h3>Vue.js</h3>
        </div>
    </div>
</template>

<script>
export default{
    props:['id'],
    beforeRouteLeave(to, from, next){ //Antes de sair da rota
        if(this.confirmed){
            next();
        }else{
            if(confirm("Tem certeza que deseja sair dessa tela?")){
                next()
            }else{
                next(false)
            }
        }   
    },
    data(){
        return {
            confirmed: false
        };
    }
}

</script>

<style>
    #rodape{
        margin-top:1000px;
    }
</style>