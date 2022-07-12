import HomeService from '../api-service/index'
import {
	GET_GMAIL_ACCOUNTS_ACTION,
	GMAIL_ACCOUNTS_GETTER,
} from './type'

export default {
	namesapced: true,

	// STATE
	state: {
		gmailAccounts: [],
	},

	// GETTER
	getters: {
		[GMAIL_ACCOUNTS_GETTER](state) {
			return state.gmailAccounts
		},
	},

	//ACTIONS
	actions: {
		[GET_GMAIL_ACCOUNTS_ACTION]({ state }) {
			const data = []
		},
	},
}
