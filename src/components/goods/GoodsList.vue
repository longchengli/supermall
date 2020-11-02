<template>
	<div class="goods">
		<div class="goods-item" v-for="">

		</div>
		<a></a>
	</div>
</template>

<script>
	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Object,
				default () {
					return {}
				}
			}
		},
	}
</script>

<style>
</style>
