<template>
<div class="new-task">
    <input class="form-element" placeholder="Adicione uma nova tarefa"
     v-model="name" @keydown.enter="add" type="text">
    <button class="form-element" @click="add">+</button>
</div>
</template>

<script>
export default{
    data(){
        return{
            name: "",
        }
    },
    methods:{
        add(){
            this.$emit("taskAdded",{name: this.name});
            this.name = '';
        }
    },
    props: {
        
    },
    computed:{
    }
}
</script>
<style>
    .form-element{
        outline: none;
        font-size: 2rem;
        border:1px solid;
        padding: 5px 10px 8px;
        color: #FFF;
    }
    input.form-element{
        width:500px;
        background: #FFF2;
        border-radius:8px 0 0 8px;
    }
    button.form-element{
        background-color: #2496F3;
        border-radius:0 8px 8px 0;
    }
</style>