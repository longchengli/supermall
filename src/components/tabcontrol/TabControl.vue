<template>
	<div id="tab-control">
		<div id="item" v-for="(item,index) in titles" :class="{active:index == currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0,
			}
		},
		methods: {
			itemClick(index) {
				if(index != this.currentIndex){
					this.currentIndex = index
					this.$emit('tabControlClick', index)
				}
			}
		}

	}
</script>

<style>
	#tab-control {
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background-color: #FFFFFF;
	}

	#item {
		flex: 1;
	}

	.active {
		color: #FF8198;
	}

	.active span {
		padding: 5px;
		border-bottom: 3px solid #FF8198;
	}
</style>
