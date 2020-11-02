<template>
	<div id="app">
		<router-view></router-view>
		<main-tabbar/>
	</div>
</template>

<script>
	import MainTabbar from '@/components/MainTabbar'

	export default {
		name: 'App',
		components: {
			MainTabbar
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>
