import { createApp } from 'vue';

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {
        alterarTitulo: function(oEvent){
            this.message = oEvent.target.value
        }
    },
}).mount('#app')