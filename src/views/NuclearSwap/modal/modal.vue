<template>
	<teleport to="body">
		<div
			class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-20"
			v-show="showModal"
			@click.self="onCloseModal"
		>
			<div
				class="w-96 rounded-lg bg-white p-4 shadow-xl"
				role="dialog"
				ref="modal"
			>
				<div
					class="flex flex-row items-center justify-between"
				>
					<span>Select a token</span>

					<x-icon
						class="h-5 w-5 cursor-pointer hover:opacity-20"
						@click="onCloseModal"
					/>
				</div>

				<div>
					<input type="search" class="w-full" />
				</div>

				<div class="bg-slate-800 p-0"></div>

				<div class="h-80 overflow-auto">
					<token-represent-component
						v-for="item in demoTokenFound"
						class="my-2"
						:info="item"
						@select-token="onSelectToken"
					/>
				</div>
			</div>
		</div>
	</teleport>
</template>
<script setup>
	import { XIcon } from '@heroicons/vue/solid'
	import { reactive, watch } from 'vue'
	import { useStore } from 'vuex'
	import { GET_TOKEN_INFO_ACTION } from '../store-module/type'
	import TokenRepresentComponent from '../components/TokenRepresent.component.vue'

	const store = useStore()
	const props = defineProps({
		showModal: {
			type: Boolean,
			default: false,
			required: true,
		},
	})

	const emits = defineEmits(['closeModal'])

	const demoTokenFound = reactive([
		{
			name: 'BycicleFi',
			symbol: 'BCF',
			address: '0xe78AD8967e523a29D4D3a8e76422Aa7ab2B6A47E',
			image: '',
		},
		{
			name: 'BycicleFi',
			symbol: 'BCF',
			address: '0xe78AD8967e523a29D4D3a8e76422Aa7ab2B6A47E',
			image: '',
		},
	])

	const onSelectToken = (info) => {
		store.dispatch(GET_TOKEN_INFO_ACTION, info)
	}

	const onCloseModal = () => {
		emits('closeModal')
	}
</script>
<style lang=""></style>
