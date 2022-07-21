import {
	GET_TOKEN_INFO_ACTION,
	SWAP_TOKEN_ACTION,
	TOKEN_INFO_GETTER,
} from './type'
import swapService from '../api-service/index'

export default {
	namesapced: true,

	// STATE
	state: {
		selectedTokenInfo: {},
	},

	// GETTER
	getters: {
		[TOKEN_INFO_GETTER](state) {
			return state.selectedTokenInfo
		},
	},

	//ACTIONS
	actions: {
		[GET_TOKEN_INFO_ACTION]({ state }, value) {
			state.selectedTokenInfo = value
		},

		[SWAP_TOKEN_ACTION]({ state }, value) {
			console.log(value)
			swapService
				.swapIdoToken(
					value.tokenIn,
					value.tokenOut,
					value.amount
				)
				.then((data) => {
					console.log(data)
				})
		},
	},
}
