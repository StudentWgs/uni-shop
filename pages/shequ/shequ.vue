<template>
	<view class="view">
		<scroll-view  class="scrollView" scroll-y="true" >
			<view :class="active===index?'active':''" v-for="(i,index) in 20" :key="index" @click="getinfo(index)">社区1</view>
		</scroll-view>
		<view class="right">暂无数据</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:0
			}
		},
		methods: {
			getinfo(index) {
				this.active = index
				console.log('get');
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}
	.view {
		height: 100%;
		display: flex;
	}
	.scrollView {
		font-size: 40rpx;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid #d5d5d5;
		border-right: 1px solid #d5d5d5;
	}
	.active {
		color: white;
		background: #f9181c;
	}
	.scrollView {
		width: 200rpx;
		height: 100%;
	}
</style>
