<template>
	<div class="home">
		<home-navigation-bar class="navigation" />

		<scroll class="content" :probeType="3" :pullUpLoad="true" @scroll="contentScroll">
			<home-carousel :banners="banners" />
			<home-recommend :recommends="recommends" />
			<home-feature-view />
			<tab-control class="tabcontrol" :titles="titles" />
			<ul>
				<li>列表1</li>
				<li>列表2</li>
				<li>列表3</li>
				<li>列表4</li>
				<li>列表5</li>
				<li>列表6</li>
				<li>列表7</li>
				<li>列表8</li>
				<li>列表9</li>
				<li>列表10</li>
				<li>列表11</li>
				<li>列表12</li>
				<li>列表13</li>
				<li>列表14</li>
				<li>列表15</li>
			</ul>
		</scroll>

		<back-top v-show="isShowBackTop"/>

	</div>
</template>

<script>
	import HomeNavigationBar from './childcomponents/HomeNavigationBar'
	import HomeCarousel from './childcomponents/HomeCarousel'
	import HomeRecommend from './childcomponents/HomeRecommend'
	import HomeFeatureView from './childcomponents/HomeFeatureView'
	import TabControl from '@/components/tabcontrol/TabControl'
	import Scroll from '@/components/scroll/Scroll'
	import BackTop from '@/components/backtop/BackTop'


	import {
		getHomeMultidata,
		getHomeGoods
	} from '@/network/home.js'

	export default {
		name: 'Home',
		components: {
			HomeNavigationBar,
			HomeCarousel,
			HomeRecommend,
			HomeFeatureView,
			TabControl,
			Scroll,
			BackTop
		},
		created() {
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list
				this.recommends = res.data.recommend.list
			}).catch(err => {

			})
			getHomeGoods().then(res => {
				console.log(res);
			})
		},
		data() {
			return {
				banners: [],
				recommends: [],
				titles: ['流行', '新款', '精选'],
				goods: {
					pop: {
						page: 1,
						list: []
					},
					new: {
						page: 1,
						list: []
					},
					sell: {
						page: 1,
						list: []
					}
				},
				isShowBackTop: false
			}
		},
		methods:{
			contentScroll(position){
				this.isShowBackTop = (-position.y) > 400
			}
		}
	}
</script>

<style scoped>
	.home {
		position: relative;
		height: 100vh;
	}

	.content {
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 44px;
		left: 0;
		right: 0;
	}

	li {
		height: 50px;
		line-height: 50px;
	}



	/* 	.navigation {
		width: 100%;
		height: 44px;
		position: fixed;
		top: 0;
		z-index: 9;
	} */

	.tabcontrol {
		top: 43px;
		position: sticky;
	}
</style>
