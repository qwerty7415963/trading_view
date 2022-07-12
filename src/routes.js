import Home from './views/Home/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import NuclearSwap from '@/views/NuclearSwap/NuclearSwap.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{
		path: '/Nuclear-Swap',
		component: NuclearSwap,
		meta: { title: 'Nuclear-Swap' },
	},
	{
		path: '/about',
		meta: { title: 'About' },
		component: About,
	},
	{ path: '/:path(.*)', component: NotFound },
]
