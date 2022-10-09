import { createApp } from 'vue';

createApp({
    data() {
        return {
            valor: ''
        }
    },
    methods: {
        Alertar: function () {
            alert("Alerta")
        },
        onDigite:function(oEvent){
            this.valor = oEvent.target.value;
        }
    },
}).mount('#desafio')