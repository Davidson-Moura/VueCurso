<template><!--$emit('input',!value) está sendo usado para retornar o evento @input="escolha = $event.target.value" no componente pai-->
    <div class="escolha"
        @click="$emit('input',!value)" 
        :class="{ligado: value, desligado: !value}"> <!-- v-model="usuario.senha" é igual a :value='usuario.senha' @input="usuario.senha = $event.target.value" => equivale ao bind de duas direções-->
        <div v-if="ligado" class="botao"></div>
        <div v-else class="botao"></div>
    </div>
</template>

<script>
export default {
    props:{
        value:{
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
    .escolha {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 15px;
        width: 40px;
        border-radius: 20px;
        border: 1px solid #AAA;
    }

    .botao {
        position: absolute;
        margin: 0px 5px;
        height: 25px;
        width: 25px;
        border-radius: 14px;
        background: #FFF;
        box-shadow: 0px 0px 5px #000B;
    }

    .desligado {
        background-color: #AAA;
    }

    .ligado {
        background-color: #7495c2;
    }

    .desligado .botao {
        left: -10px;
    }

    .ligado .botao {
        background-color: #255ca9;
        align-self: flex-end;
    }
</style>
