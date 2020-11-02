<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'Tabbar'
	}
</script>

<style>
	.tabbar{
		display: flex;
		height: 44px;
		text-align: center;
		font-size: 14px;
		background-color: #f6f6f6;
		
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		
		box-shadow: 0 2px 2px rgba(100,100,100,.2);
	}
</style>
