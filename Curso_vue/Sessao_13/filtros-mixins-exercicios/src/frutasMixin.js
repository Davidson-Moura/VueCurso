export default{
    data(){
        return {
            fruta: '',
            frutas: ['banana','maça','uva']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    },
    created(){ //Tem tempo de vida separado do componente
        console.log("created mixin");
    }
}