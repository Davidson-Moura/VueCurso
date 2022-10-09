<template>
<div class="task" :class="stageClass" @click="$emit('taskStageChanged',task)" >
    <span class="close" @click.stop="$emit('taskDelete',task)">x</span> <!-- .stop impede que os outros eventos de camadas pai, impedindo o @click da div superior-->
    <p>{{task.name}}</p>
</div>
</template>

<script>
export default{
    props: {
        task:{type:Object, required: true}
    },
    computed:{
        stageClass(){
            return {
                pending : this.task.pending,
                done : !this.task.pending
            }
        }
    }
}
</script>
<style>
    .task{
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;/*Não deixa selecionar o texto*/
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pending{
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }
    .done{
        color:#ddd;
        border-left: 12px solid #0A8f08;
        background-color: #4ACF50;
        text-decoration: line-through;
    }
    .pending .close{
        background-color: #B73229;
        position: absolute;
        right: 10px;
        top:10px;
        width: 20px;
        height: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
    .done .close{
        background-color: #0A8f08;
        position: absolute;
        right: 10px;
        top:10px;
        width: 20px;
        height: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>