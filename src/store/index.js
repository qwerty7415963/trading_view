import { createStore } from 'vuex'
import home from '@/views/Home/store-module'
import swap from '@/views/NuclearSwap/store-module'

export default createStore({
	modules: {
		// home
		home,

		//wallet
		// wallet,

		//swap
		swap,
	},
})
