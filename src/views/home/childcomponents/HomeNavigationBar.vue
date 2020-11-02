<template>
	<div class="home-navigation-bar">
		<navigation-bar>
			<label slot="center">购物街</label>
		</navigation-bar>
	</div>
</template>

<script>
	import NavigationBar from '@/components/navigationbar/NavigationBar'
	
	export default {
		name:'HomeNavigationBar',
		components:{
			NavigationBar
		}
	}
</script>

<style>
	.home-navigation-bar{
		background-color: #FF8198;
		color: #FFFFFF;
		font-size: 20px;
		line-height: 44px;
	}
</style>
