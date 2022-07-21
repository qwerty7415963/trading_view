import { createApp } from 'vue'
import AuthServices from '../pages/Auth/api-service'
// axios
import axios from 'axios'
// store
import store from '../store/'
// router
import router from '../router'
import {
	storageTokenKeyName,
	storageUserDataName,
} from '../@db/common'
import App from '../../App.vue'

axios.interceptors.request.use(
	(config) => {
		store.commit('app/UPDATE_IS_LOADING', true)
		// Do something before request is sent
		const tokenData = AuthServices.getToken()
		const verifyToken = config?.verifyToken ?? true

		if (tokenData && verifyToken) {
			config.headers.Authorization = `${tokenData.type} ${tokenData.token}`
		}

		return config
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	(response) => {
		store.commit('app/UPDATE_IS_LOADING', false)
		return response
	},
	(error) => {
		const { response } = error
		store.commit('app/UPDATE_IS_LOADING', false)
		localStorage.removeItem(storageTokenKeyName) // Remove the storage token
		localStorage.removeItem(storageUserDataName) // remove the storage user
		router.replace({ name: 'login' })
		return Promise.resolve(response || error)
	}
)

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.proxy = true
const app = createApp(App)
app.config.globalProperties.$http = axios

export default axios
