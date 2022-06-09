<template>
	<view>
		<image src="../../static/logo.png"></image>
		<view class="call">
			<text @click="callphone">联系电话：（拨打）010-123456</text>
			<text>地址：黄埔abc区</text>
		</view>
		<map name="local" :longitude="longitude" :latitude="latitude" :markers="biaoji"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 0,
				latitude: 0,
				biaoji:[
					{	
						id:1,
					    latitude: 0,
					    longitude: 0,
					    iconPath: '../../static/logo.png',
						width:50,
						height:50
					}
				]
			}
		},
		methods: {
			callphone(){
				uni.makePhoneCall({
					phoneNumber: '12345678'
				});
			}
		},
		onLoad() {
			uni.getLocation({
				type: 'wgs84',
				success:(res) => {
					// console.log('当前位置的经度：' + res.longitude);
					// console.log('当前位置的纬度：' + res.latitude);
					this.longitude = res.longitude;
					this.latitude = res.latitude;
					this.biaoji[0].latitude = res.latitude;
					this.biaoji[0].longitude = res.longitude;
				}
			});
		}
	}
</script>

<style>
	/* view {
		height: 100vh;
		background: #000;
	} */
	image {
		width: 100%;
		height: 200px;
	}
	.call {
		display: flex;
		flex-direction: column;
	}
	text {
		border-bottom: 1px solid #cacaca;
		margin: 20rpx;
		padding: 10rpx;
	}
	
	map {
		width: 100%;
		height: 400px;
	}
</style>
