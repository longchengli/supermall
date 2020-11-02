<template>
	<div id="home-recommend">
		<div id="item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" />
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props: {
			recommends: {
				type: Array,
				default () {
					return []
				}
			}
		},
		
	}
</script>

<style>
	#home-recommend{
		display: flex;
		padding: 5px;
		font-size: 12px;
		text-align: center;
		border-bottom: 15px solid #F6F6F6;
	}
	
	#item{
		flex: 1;
	}
	
	#item img{
		width: 70px;
		height: 70px;
		margin-bottom: 5px;
	}
</style>
