<template>
	<div class="back-top" @click="backTopClick">
		<img src="~@/assets/img/common/top.png" />
	</div>
</template>

<script>
	export default{
		name:'BackTop',
		methods:{
			backTopClick(){
				this.$emit('backTopClick')
			}
		}
	}
</script>

<style scope>
	.back-top{
		position: fixed;
		bottom: 45px;
		right: 10px;
	}
	
	.back-top img{
		width: 43px;
		height: 43px;
	}
</style>
