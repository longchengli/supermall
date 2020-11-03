<template>
	<div class="wapper" ref="wapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: 'Scroll',
		props: {
			probeType: {
				type: Number,
				default () {
					return 0
				}
			},
			pullUpLoad: {
				type: Boolean,
				default () {
					return false
				}
			}
		},
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wapper, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})
			
			setTimeout(() => {
				this.scroll.refresh()
			},500)
			
			if(this.probeType >= 2){
				this.scroll.on('scroll', (position) => {
					this.$emit('scroll',position)
				})
			}
			
			
		}
	}
</script>

<style>
</style>
