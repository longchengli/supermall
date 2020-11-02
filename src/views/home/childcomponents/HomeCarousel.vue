<template>
	<div id="home-carousel">
		<carousel>
			<carousel-item v-for="item in banners" :key="item.acm">
				<a :href="item.link">
					<img :src="item.image" @load="imageLoad"/>
				</a>
			</carousel-item>
		</carousel>
	</div>

</template>

<script>
	import Carousel from '@/components/carousel/Carousel'
	import CarouselItem from '@/components/carousel/CarouselItem'

	export default {
		name: 'HomeCarousel',
		components: {
			Carousel,
			CarouselItem
		},
		props: {
			banners: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				isLoad: false
			}
		},
		methods: {
			imageLoad() {
				if (!this.isLoad) {
					this.$emit('swiperImageLoad')
					this.isLoad = true
				}
			}
		},
	}
</script>

<style>
</style>
