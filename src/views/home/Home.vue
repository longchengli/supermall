<template>
	<div class="home">
		<home-navigation-bar class="navigation" />
		<tab-control class="tabControlShow" v-show="isTabControlShow" :titles="titles" @tabControlClick="tabControlClick" ref="tabControl1" />

		<scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUpHandle="pullingUpHandle">
			<home-carousel :banners="banners" @swiperImageLoad="swiperImageLoad" />
			<home-recommend :recommends="recommends" />
			<home-feature-view />
			<tab-control :titles="titles" @tabControlClick="tabControlClick" ref="tabControl2" />
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

	import {
		debounce,
	} from '@/common/util.js'

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
				//返回顶部按钮
				isShowBackTop: false,
				//选项滑动到顶部固定位置
				tabControOffSet: 0,
				isTabControlShow: false,
				//离开首页记录首页位置
				homeY: 0,

			}
		},
		computed: {
			//首页商品显示
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
				this.isTabControlShow = (-position.y) > this.tabControOffSet
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
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
			},

			//上拉加载更多
			pullingUpHandle() {
				this.getHomeGoods(this.currentType)
			},

			//轮播图加载完计算tabcontrol位置
			swiperImageLoad() {
				this.tabControOffSet = this.$refs.tabControl2.$el.offsetTop
			}

		},

		mounted() {
			const refresh = debounce(this.$refs.scroll.refresh, 50)
			//图片加载了刷新scroll
			this.$bus.$on('imgLoad', () => {
				refresh()
			})
		},


		activated() {

		},
		deactivated() {
			this.homeY = this.$refs.scroll.scroll.y
			console.log(this.homeY);
		},



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

	.tabControlShow {
		position: relative;
		z-index: 9;
	}


	/* 	.navigation {
		width: 100%;
		height: 44px;
		position: fixed;
		top: 0;
		z-index: 9;
	} */

	/* 	.tabcontrol {
		top: 43px;
		position: sticky;
	} */
</style>
