<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!--<Menu></Menu>-->
		<transition mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut"> <!--Animate.css-->
			<router-view name="menu"></router-view>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>