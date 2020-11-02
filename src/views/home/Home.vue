<template>
	<div class="home">
		<home-navigation-bar class="navigation"/>
		<div style="height: 130px;background-color: coral;">轮播图</div>
		
		
		
		
		<ul>
			<li>列表1</li>
			<li>列表2</li>
			<li>列表3</li>
			<li>列表4</li>
			<li>列表5</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
		</ul>
	</div>
</template>

<script>
	import HomeNavigationBar from './childcomponents/HomeNavigationBar'
	
	import {
		getHomeMultidata
	} from '@/network/home.js'
	
	export default{
		name:'Home',
		components:{
			HomeNavigationBar
		},
		created(){
			getHomeMultidata().then(res => {
				console.log(res);
			}).catch(err => {
				
			})
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	li{
		height: 50px;
		line-height: 50px;
	}
	
	.home{
		padding-top: 44px;
	}
	
	.navigation{
		width: 100%;
		height: 44px;
		position: fixed;
		top: 0;
	}
</style>
