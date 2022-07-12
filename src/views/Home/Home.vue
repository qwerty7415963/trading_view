<template>
	<div>
		<div
			class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
		>
			<h2
				class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
			>
				Ready to dive in?
				<br />
				<span class="text-indigo-600"
					>Vite + Vue 3 + Tailwind CSS</span
				>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<router-link
						to="/about"
						class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
						>{{ data }}</router-link
					>
				</div>
				<ButtonRepo @on-clicked-button="onClick" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import ButtonRepo from '@/components/ButtonRepo.vue'
	import { ref, computed, watch, reactive } from '@vue/runtime-core'
	import { useStore } from 'vuex'
	import {
		GET_GMAIL_ACCOUNTS_ACTION,
		GMAIL_ACCOUNTS_GETTER,
	} from './store-module/type'

	const store = useStore()

	let data = ref('this is ref')
	let arr = reactive([])

	const gmailAccounts = computed(
		() => store.getters[GMAIL_ACCOUNTS_GETTER]
	)

	const onClick = () => {
		console.log('clicked')
		store.dispatch(GET_GMAIL_ACCOUNTS_ACTION)
	}

	watch(gmailAccounts, (newValue, oldValue) => {
		console.log(newValue)
		data = 'no doi ne'
		arr = newValue.value
		console.log(data)
	})
</script>
