<template>
	<div class="tabbar-item" @click="itemClick">
		<div v-if="!isActive" class="item-icon">
			<slot name="item-icon"></slot>
		</div>
		<div v-else class="item-icon-active">
			<slot name="item-icon-active"></slot>
		</div>
		<div class="item-text" :class="{active:isActive}">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabbarItem',
		props:{
			path:String,
		},
		data(){
			return{
				
			}
		},
		computed:{
			isActive(){
				//判断当前路径对应tabbar-item中的path
				return this.$route.path.indexOf(this.path) != -1
			}
		},
		methods:{
			itemClick(){
				//点击跳转到响应路径
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tabbar-item{
		flex: 1;
	}
	
	.tabbar-item img{
		width: 20px;
		height: 20px;
		margin-top: 2px;
	}
	
	.active{
		color: #FF8198;
	}
</style>
