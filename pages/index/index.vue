<template>
	<view class="content">
		<view class="header">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(i,index) in swiperlist" :key="i.index">
					<navigator :url="'/pages/webview/webview?url=' + encodeURI('https://www.bilibili.com')" open-type="navigate">						
						<image :src="i.image_src" style="width: 100%;height: 150px;"></image>
					</navigator>
				</swiper-item>
			</swiper>
			<!-- <view class="tab">
				<u-button type="primary" icon="grid" text="社区" shape="circle" @tap="goto('/pages/shequ/shequ')"></u-button>
				<u-button type="primary" icon="account" text="个人中心" shape="circle" @tap="goto('/pages/me/me')"></u-button>
			</view> -->
			<view class="nav">
				<view class="nav_item" v-for="(i,index) in icons" :key="index" @click="goto(i.path)">
					<image :src="i.img"></image>
					<view class="text">{{i.text}}</view>
				</view>
			</view>
		</view>
		
		<goodlist :goodsdata="list"></goodlist>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperlist: null,
				icons:[
					{img:require('../../static/icons/icon_l569uchk3ns/shop.png'),text:'商城',path:'/pages/shop/shop'},
					{img:require('../../static/icons/icon_l569uchk3ns/phone.png'),text:'联系我们',path:'/pages/call/call'},
					{img:require('../../static/icons/icon_l569uchk3ns/message-fill.png'),text:'社区',path:'/pages/shequ/shequ'},
					{img:require('../../static/icons/icon_l569uchk3ns/video-fill.png'),text:'视频',path:'/pages/video/video'}
				],
				list: []
			}
		},
		onLoad() {
			this.getSwiper()
			this.getgoods()
		},
		methods: {
			goto(url) {
				uni.navigateTo({
					url
				})
			},
			// 获取轮播图
			async getSwiper() {
				const res = await this.$request({
					url:'/api/public/v1/home/swiperdata',
				})
				this.swiperlist = res.data.message
			},
			// 获取商品
			async getgoods() {
				const res = await this.$request({
					url:'/api/public/v1/goods/search'
				})
				// console.log('goods',res);
				this.list = res.data.message.goods
			}
		}
	}
</script>

<style scoped>
	.nav {
		display: flex;
	}
	.nav_item{
		width: 25%;
		text-align: center;
	}
	.nav_item > image {
		width: 50%;
		height: 90rpx;
	}
</style>
