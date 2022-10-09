<template>
<div class="task-grid">
    <template v-if="tasks.length">
        <Task v-for="(task,i) in tasks" :key="task.name" :task="task"
        @taskDelete="$emit('taskDelete',i)"
        @taskStageChanged="$emit('taskStageChanged',i)"></Task>
    </template>
    <p v-else class="no-task">Sua vida está em dia!</p>
</div>
</template>

<script>
import Task from "./Task.vue"
export default{
    components:{
        Task
    },
    props: {
        tasks:{type:Array, required: true}
    }
}
</script>

<style>
    .task-grid{
        display: flex; /*padrão em linha */
        justify-content: center;
        flex-wrap: wrap; /*permitir quebra de linha quando acabar o espaço */
    }
    .task-grid .task{
        margin:10px;
    }
    .no-task{
        color:#AAA;
        font-size: 1.7rem;
    }
</style>