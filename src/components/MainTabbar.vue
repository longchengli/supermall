<template>
	<div class="main-tabbar">
		<tabbar>
			<tabbar-item path="/home">
				<img slot="item-icon" src="../assets/img/tabbar/home.svg" />
				<img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" />
				<label slot="item-text">首页</label>
			</tabbar-item>
			<tabbar-item path="/category">
				<img slot="item-icon" src="../assets/img/tabbar/category.svg" />
				<img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" />
				<label slot="item-text">分类</label>
			</tabbar-item>
			<tabbar-item path="/shopcart">
				<img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" />
				<img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" />
				<label slot="item-text">购物车</label>
			</tabbar-item>
			<tabbar-item path="/profile">
				<img slot="item-icon" src="../assets/img/tabbar/profile.svg" />
				<img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" />
				<label slot="item-text">我的</label>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import Tabbar from '@/components/tabbar/Tabbar'
	import TabbarItem from '@/components/tabbar/TabbarItem'
	
	export default{
		name:'MainTabbar',
		components:{
			Tabbar,
			TabbarItem
		},
	}
</script>

<style>
</style>
