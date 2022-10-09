import CreateApp from "vue";

export default  new CreateApp({
    methods: {
        mudarIdade(idade){
            this.$emit("idadeMudou",idade);
        },
        idadeMudou(callback){
            this.$on("idadeMudou", callback);
        }
    }
})