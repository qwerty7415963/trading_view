export default {
	async swapIdoToken(tokenIn, tokenOut, amount) {
		axios.post(`${baseUrl}/swap`, { tokenIn, tokenOut, amount })
	},
}
