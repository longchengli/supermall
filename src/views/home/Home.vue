<template>
	<div class="home">
		<home-navigation-bar class="navigation" />

		<scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUpHandle="pullingUpHandle">
			<home-carousel :banners="banners" />
			<home-recommend :recommends="recommends" />
			<home-feature-view />
			<tab-control class="tabcontrol" :titles="titles" @tabControlClick="tabControlClick" />
			<goods-list :goods="goodsList"></goods-list>
		</scroll>

		<back-top v-show="isShowBackTop" @backTopClick="backTopClick" />

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
	import GoodsList from '@/components/goods/GoodsList'


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
			BackTop,
			GoodsList
		},
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		data() {
			return {
				banners: [],
				recommends: [],
				titles: ['流行', '新款', '精选'],
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					}
				},
				currentType: 'pop',
				isShowBackTop: false
			}
		},
		computed: {
			goodsList() {
				return this.goods[this.currentType].list
			}
		},
		methods: {
			//网络请求
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				}).catch(err => {
					console.log(err);
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					
					this.$refs.scroll.finishPullUp()
					this.$refs.scroll.refresh()
				}).catch(err => {
					console.log(err);
				})
			},

			//判断是否显示返回顶部按钮
			contentScroll(position) {
				this.isShowBackTop = (-position.y) > 600
			},

			//点击返回顶部
			backTopClick() {
				this.$refs.scroll.scrollTo(0, 0, 1000)
			},

			//判断那个被选中
			tabControlClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.scroll.refresh()
			},
			
			//上拉加载更多
			pullingUpHandle(){
				this.getHomeGoods(this.currentType)
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
