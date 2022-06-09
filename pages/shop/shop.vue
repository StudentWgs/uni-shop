<template>
	<view>
		<goodlist :goodsdata="list"></goodlist>
		<view class="list">goodslist</view>
		<view class="over">没有更多了</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{img:require('../../static/logo.png')},					
				]
			}
		},
		methods: {
			
		},
		onReachBottom() {
			console.log('xl');
		}
	}
</script>

<style>
	.list {
		height: 600px;
		background: #ffaaff;
	}
</style>
