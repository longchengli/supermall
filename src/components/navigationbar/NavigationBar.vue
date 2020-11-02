<template>
	<div class="navigation-bar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavigationBar'
	}
</script>

<style>
	.navigation-bar {
		display: flex;
		height: 44px;
		text-align: center;
	}

	.left {
		width: 50px;
	}

	.right {
		width: 50px;
	}

	.center {
		flex: 1;
	}
</style>
