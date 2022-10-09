import { createApp } from 'vue';

createApp({
    data() {
        return {
            playerLife:100,
            monsterLife:100,
            running : false,
            logs: []
        }
    },
    computed:{
        hasResult(){
            if(this.playerLife == 0 || this.monsterLife == 0){
                return true;
            }
        }
    },
    methods: {
        StartGame(){
            this.running = true;
            this.playerLife=100
            this.monsterLife=100
            this.logs= [];
        },
        attack(especial){
            this.hurt("playerLife",9,14,false,'Jogador', 'Monstro','player');
            if(this.monsterLife>0)
                this.hurt("monsterLife",7,12,especial,'Monstro','Jogador','monstro');
        },
        hurt(atr,min,max, especial, src, target, cls){
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min+plus, max+plus);
            this[atr] = Math.max(this[atr] - hurt , 0); // Math.max pega o maior valor entre this.playerLife - hurt e 0. Garantindo que não seja negativo
            this.registerLog(`${src} atingiu o ${target} com ${hurt}.`,cls);            
        },
        heal(min,max){
            const heal = this.getRandom(min,max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
            this.registerLog(`O Jogador se curou ${heal}.`,'heal');
        },
        healAndHurt(){
            this.heal(9,14);
            this.hurt("playerLife",9,14,false,'Monstro','Jogador','monstro');
        },
        getRandom(min, max){
            const value = Math.random() *(max-min)+min;
            return Math.round(value);
        },
        registerLog(text, cls){
            this.logs.unshift({text,cls});
        }
    },
    watch:{
        hasResult(value){//value é o valor retornado na função hasResult do computed
            if(value) this.running=false;
        }
    }
}).mount('#app')