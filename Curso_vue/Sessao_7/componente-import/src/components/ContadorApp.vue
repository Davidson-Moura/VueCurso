<template>
    <div class="contador">
        <span>Contadores</span>
        <p>{{contador}}</p>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>

export default{
    data(){
        return {
            contador: 0
        }
    },
    methods:{
        adicionar(){
            this.contador++;
        },
        subtrair(){
            this.contador--;
        }
    }
}
</script>

<!--scoped faz os estilos css fiquem apenas no componente--> 
<style scoped> 
    .contador span{
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }
    .contador button{
        height: 30px;
        width:30px;
        border-radius: 15px;
        outline: none;
        background-color: coral;
        color: white;
    }
</style>