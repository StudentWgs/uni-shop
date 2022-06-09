<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'',
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log('op',options)
			this.url = decodeURI(options.url)
		}
	}
</script>

<style>

</style>
