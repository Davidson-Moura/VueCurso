<template>
	<div id="app">
		<TaskProgress :progress="progress"></TaskProgress>
		<NewTask @taskAdded="addTask"></NewTask>
		<h1>Tarefas</h1>
		<TaskGrid :tasks="tasks" @taskDelete="deleteTask" 
			@taskStageChanged="toggleTaskStage"/>
	</div>
</template>

<script>
import TaskGrid from "./components/TaskGrid.vue"
import NewTask from "./components/NewTask.vue"
import TaskProgress from "./components/TaskProgress.vue"

export default {
	data(){
		return {
			tasks:[]
		}
	},
	created(){
		let json = localStorage.getItem("tasks");
		this.tasks = JSON.parse(json) || [];
	},
	watch:{
		/*tasks(){
			localStorage.setItem("tasks",JSON.stringify(this.tasks));
		} //não lê a alteração interna dos objetos*/
		tasks:{
			deep: true,//Observa as mudanças internas dos objetos
			handler(){
				localStorage.setItem("tasks",JSON.stringify(this.tasks));
			}
		}
	},
	computed:{
		progress(){
			let total = this.tasks.length;
			let done = this.tasks.filter(t => !t.pending).length;
			return Math.round(done/total * 100) || 0;
		}
	},
	methods:{
		addTask(task){
			const sameName = t =>t.name === task.name;
			const reallyNew = this.tasks.filter(sameName).length == 0;
			reallyNew && this.tasks.push({
					name: task.name,
					pending: task.pending || true
				});
		},
		deleteTask(i){
			this.tasks.splice(i,1);
		},
		toggleTaskStage(i){
			console.log(i);
			this.tasks[i].pending = !this.tasks[i].pending;
		}
	},
	components:{
		TaskGrid,
		NewTask,
		TaskProgress
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>

