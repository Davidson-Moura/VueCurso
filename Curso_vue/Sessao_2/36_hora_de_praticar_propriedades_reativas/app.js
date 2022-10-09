import { createApp } from 'vue';

createApp({
    data() {
        return {
            valor: 0,
            resultado: ""
        }
    },
    methods: {
    },
    watch: {
        valor(novo, antigo) {
            if (novo > 37)
                this.resultado = "Maior que 37"
            else if (novo == 37)
                this.resultado = "Igual que 37"
            else
                this.resultado = "Menor que 37"

            setTimeout(()=>{
                this.valor = 0
            },5000)

        }
    }
}).mount('#desafio')