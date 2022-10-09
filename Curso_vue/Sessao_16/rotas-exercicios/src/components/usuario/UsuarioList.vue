<template>
    <div class="usuario-list">
        <h2>Lista de users</h2> 
        <ul class="list"> <!-- ctrl + D => modifica mais de uma linha de uma vez-->
            <router-link tag="li" to="/usuario/1" class="item">user 1 </router-link>
            <router-link tag="li" to="/usuario/2" class="item">user 2 </router-link>
            <router-link tag="li" to="/usuario/3" class="item">user 3 </router-link>
        </ul>
    </div>
</template>

<script>
export default{
    beforeRouteEnter(to,from,next){
        console.log("antes de entrar na rota no component");
        next();
    }
}

</script>

<style>

</style>