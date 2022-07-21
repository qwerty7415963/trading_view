import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_LINK

export default {
	async swapIdoToken(tokenIn, tokenOut, amount) {
		axios.post(`${baseUrl}/swap`, { tokenIn, tokenOut, amount })
	},
}
