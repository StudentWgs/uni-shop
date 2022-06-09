<template>
	<view>
		<view class="main">
			<view class="title">
				<text>推荐商品</text>
			</view>
			<view class="goods">
				<view class="goodslist" v-for="(i,index) in goodsdata" :key="index" @click="gotogoodsdetail(i.goods_id)">
					<image :src="i.goods_big_logo"></image>
					<view class="price">
						<text>{{i.goods_name}}</text>
						<text>￥{{goods_price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goodlist",
		props:['goodsdata'],
		data() {
			return {
				
			};
		},
		methods:{
			// 商品详情页
			gotogoodsdetail(id) {
				uni.navigateTo({
					url: '/pages/goodsdetail/goodsdetail?id='+id
				})
			}
		}
	}
</script>

<style>
	.goods {
		display: flex;
		flex-wrap: wrap;
	}
	.main {
		background: #e2dfd2;
		margin-top: 10rpx;
		width: 100%;
	}
	.title {
		color: firebrick;
		font-size: 36rpx;
		text-align: center;
		margin: 10rpx;
		background: white;
	}
	.goodslist {
		width: 50%;
		display: flex;
		flex-direction: column;
	}
	.goodslist > image {
		width: 100%;
		height: 170px;
	}
	.price {
		display: flex;
		flex-direction: column;
	}
</style>