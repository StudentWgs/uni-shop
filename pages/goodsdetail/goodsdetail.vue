<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(i,index) in goodsSwiper" :key="i.pics_id">
				<navigator :url="'/pages/webview/webview?url=' + encodeURI('https://www.bilibili.com')" open-type="navigate">						
					<image :src="i.pics_big_url" style="width: 100%;height: 150px;"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="price">
			<text>￥{{price}}</text>
		</view>
		<view class="richtext">
			{{richtext}}
		</view>
		<view class="goodsnum">
			<text>货号：{{goodsid}}</text>
			<text>库存：{{goodscount}}</text>
		</view>
		<view class="content">
			<text style="border-bottom:2px solid #eaeaea ;">详情介绍</text>
			<rich-text :nodes="goodscontent"></rich-text>
		</view>
		<view class="shopping">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsSwiper:null,
				price:null,
				richtext:null,
				goodsid:null,
				goodscount:null,
				goodscontent:null,
				options: [{
							icon: 'headphones',
							text: '客服'
						}, {
							icon: 'shop',
							text: '店铺',
							info: 2,
							infoBackgroundColor:'#007aff',
							infoColor:"red"
						}, {
							icon: 'cart',
							text: '购物车',
							info: 2
						}],
				buttonGroup: [{
					    text: '加入购物车',
					    backgroundColor: '#ff0000',
					    color: '#fff'
					},
					{
					    text: '立即购买',
					   backgroundColor: '#ffa200',
					    color: '#fff'
					}
					]
					
			}
		},
		methods: {
			// 获取商品详情
			async getgoodsdetail(id) {
				const res = await this.$request({
					url:'/api/public/v1/goods/detail?goods_id=' + id
				})
				// console.log('detail',res)
				this.goodsSwiper = res.data.message.pics
				this.price = res.data.message.goods_price
				this.richtext = res.data.message.goods_name
				this.goodsid = res.data.message.goods_id
				this.goodscount = res.data.message.goods_number
				this.goodscontent = res.data.message.goods_introduce
			},
			onClick (e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(option) {
			this.getgoodsdetail(option.id)
		}
	}
</script>

<style>
	.price {
		color: red;
	}
	.price, .richtext, .goodsnum, .content {
		padding: 10rpx;
		font-size: 40rpx;
	}
	.goodsnum {
		display: flex;
		flex-direction: column;
		border-top:  10rpx solid #e5e5e5;
		border-bottom:  10rpx solid #e5e5e5;
	}
	.goodsnum > text {
		line-height: 60rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		padding-bottom: 50px;
	}
	.shopping {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
