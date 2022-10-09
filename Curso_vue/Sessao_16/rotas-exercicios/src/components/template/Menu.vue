<template>
    <nav class="menu">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><!-- active-class="active" quando a li estiver ativa colocar a classe active | exact -> faz com que apenas coloque a classe se o link for exatamente aquele-->
                <a>Ínicio</a>
            </router-link> <!-- tag="li" => faz o route-link se torne um li -->
            <router-link to="/usuario/list" active-class="active"><a>Usuário</a></router-link> <!-- Se não usarmos o exact as rotas que tenham "/usuario", como "/usuario/2" tbm ativaram a classe-->
        </ul>
    </nav>
</template>

<script>
export default{
    
}

</script>

<style>
.active{
    background-color: aqua;
}
</style>