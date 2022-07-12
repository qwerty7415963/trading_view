<template>
	<div class="flex flex-col items-center justify-center space-y-1">
		<div
			class="flex h-40 w-96 flex-col rounded-2xl bg-slate-600 p-4"
		>
			<div class="flex flex-row justify-between">
				<button class="text-white">BCF</button>

				<p class="text-white">Ballance: 599999999</p>
			</div>

			<input
				class="my-3 flex-1 border-none bg-slate-600 text-3xl text-white"
				placeholder="0.0"
				type="number"
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
				<button class="text-white">BCF</button>

				<p class="text-white">Ballance: 599999999</p>
			</div>

			<input
				class="my-3 flex-1 border-none bg-slate-600 text-3xl text-white focus:outline-none"
				placeholder="0.0"
				type="number"
			/>
		</div>
	</div>
</template>

<script setup>
	import { ref, watch } from 'vue'
	import { useStore } from 'vuex'
	import { ArrowCircleDownIcon } from '@heroicons/vue/solid'

	const store = useStore()

	const tokenIn = ref('0xae13d989dac2f0debff460ac112a837c89baa7cd')
	const tokenOut = ref('')

	const selectedAmount = ref('')

	const swapAmount = ['15%', '25%', '50%', '100%']

	watch(tokenIn, (value, oldValue) => {
		console.log(value, oldValue)
	})

	watch(tokenOut, (value, oldValue) => {
		console.log(value, oldValue)
	})

	const onSelectAmount = (amount) => {
		selectedAmount.value = amount
		console.log(amount)
	}

	const onPressAutoSwap = () => {
		console.log('clicked autoswap')
	}
</script>

<style scoped></style>
