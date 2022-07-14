<template>
	<div class="flex flex-col items-center justify-center space-y-1">
		<div
			class="flex h-40 w-96 flex-col rounded-2xl bg-slate-600 p-4"
		>
			<div class="flex flex-row justify-between">
				<button
					class="px-2 py-0.5 text-white hover:bg-slate-500"
					@click="onChangeModalState"
				>
					{{ selectedTokenInfo.symbol }}
				</button>

				<p class="text-white">Ballance: 599999999</p>
			</div>

			<input
				class="my-3 flex-1 border-none bg-slate-600 text-3xl text-white"
				placeholder="0.0"
				type="number"
				v-model="tokenInAmount"
			/>

			<div class="grid grid-cols-4 gap-2">
				<button
					class="w-full justify-self-center bg-slate-500 text-white"
					v-for="amount in swapAmount"
					@click="onSelectAmount(amount)"
				>
					{{ amount }}
				</button>
			</div>
		</div>

		<div>1 BCF = 0.0000000039 BUSD</div>

		<div
			class="flex h-32 w-96 flex-col rounded-2xl bg-slate-600 p-4"
		>
			<div class="flex flex-row justify-between">
				<button
					class="px-2 py-0.5 text-white hover:bg-slate-500"
				>
					{{ defaultSelectedOutToken.symbol }}
				</button>

				<p class="text-white">Ballance: 599999999</p>
			</div>

			<input
				class="my-3 flex-1 border-none bg-slate-600 text-3xl text-white focus:outline-none"
				placeholder="0.0"
				type="number"
			/>
		</div>

		<div class="flex flex-row items-center justify-between">
			<button
				class="btn-primary w-40 p-3"
				@click="onPressAutoSwap"
			>
				SWAP
			</button>
		</div>
	</div>

	<Modal
		:show-modal="isShowModal"
		@close-modal="onChangeModalState"
	></Modal>
</template>

<script setup>
	import { computed, ref, watch } from 'vue'
	import { useStore } from 'vuex'
	import { ArrowCircleDownIcon } from '@heroicons/vue/solid'
	import Modal from './modal/modal.vue'
	import {
		TOKEN_INFO_GETTER,
		SWAP_TOKEN_ACTION,
	} from './store-module/type'
	import {
		defaultSelectedInToken,
		defaultSelectedOutToken,
	} from '@/core/data/common'

	const store = useStore()

	const selectedTokenInfo = computed(
		() => store.getters[TOKEN_INFO_GETTER]
	)

	const selectedAmount = ref('')
	const tokenInAmount = ref(0)

	const isShowModal = ref(false)

	const swapAmount = ['15%', '25%', '50%', '100%']

	watch(selectedTokenInfo, (value) => {
		console.log(value)
	})

	const onSelectAmount = (amount) => {
		selectedAmount.value = amount
		console.log(amount)
	}

	const onPressAutoSwap = () => {
		store.dispatch(SWAP_TOKEN_ACTION, selectedTokenInfo.value)
	}

	const onChangeModalState = () => {
		isShowModal.value = !isShowModal.value
	}
</script>

<style scoped></style>
