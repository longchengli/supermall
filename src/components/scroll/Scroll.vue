<template>
	<div class="wapper" ref="scroll">
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
		methods: {
			//刷新scroll
			refresh() {
				console.log('刷新scroll');
				this.scroll && this.scroll.refresh()
			},

			//显示scroll区域到指定位置
			scrollTo(x, y, time = 500) {
				this.scroll && this.scroll.scrollTo(x, y, time)
			},
			
			//完成上拉加载更多时调用
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp()
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.scroll, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})

			if (this.probeType >= 2) {
				this.scroll.on('scroll', (position) => {
					this.$emit('scroll', position)
				})
			}

			if (this.pullUpLoad) {
				this.scroll.on('pullingUp', () => {
					this.$emit('pullingUpHandle')
				})
			}

		}
	}
</script>

<style>
</style>
