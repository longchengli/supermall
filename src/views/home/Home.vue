<template>
	<div class="home">
		<home-navigation-bar class="navigation" />
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
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
			<li>列表</li>
		</ul>
	</div>
</template>

<script>
	import HomeNavigationBar from './childcomponents/HomeNavigationBar'
	import HomeCarousel from './childcomponents/HomeCarousel'
	import HomeRecommend from './childcomponents/HomeRecommend'
	import HomeFeatureView from './childcomponents/HomeFeatureView'
	import TabControl from '@/components/tabcontrol/TabControl'


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
			TabControl
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
				}
			}
		}
	}
</script>

<style>
	li {
		height: 50px;
		line-height: 50px;
	}

	.home {
		padding-top: 44px;
	}

	.navigation {
		width: 100%;
		height: 44px;
		position: fixed;
		top: 0;
		z-index: 9;
	}

	.tabcontrol {
		top: 43px;
		position: sticky;
	}
</style>
