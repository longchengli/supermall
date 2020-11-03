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
			refresh(){
				setTimeout(() => {
					this.scroll.refresh()
				},1000)
			},
			
			scrollTo(x, y, time = 500) {
				this.scroll.scrollTo(x, y, time)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.scroll, {
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})

			setTimeout(() => {
				this.scroll.refresh()
			}, 2000)

			if (this.probeType >= 2) {
				this.scroll.on('scroll', (position) => {
					this.$emit('scroll', position)
				})
			}
			
			if(this.pullUpLoad){
				this.scroll.on('pullingUp',() => {
					this.$emit('pullingUpHandle')
				})
			}

		}
	}
</script>

<style>
</style>
