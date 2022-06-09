const Base_URl = "https://api-hmugo-web.itheima.net"
export const request = (options) => {
	return new Promise((cg,sb) => {
		uni.request({
			url: Base_URl + options.url,
			method: options.method || "GET",
			data: options.data || {},
			success:(res) => {
				cg(res)
			},
			fail:(err) => {
				sb(err)
			}
		})
	})
}