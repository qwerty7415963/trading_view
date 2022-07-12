<template>
	<div class="sidebar" :style="{ width: sideBarWidth }">
		<button class="btn-primary" @click="onPressConnectWallet">
			<p
				class="overflow-hidden text-ellipsis whitespace-nowrap"
			>
				{{ walletAddress }}
			</p>
		</button>
		<h1>
			<span v-if="collapse">
				<SideBarLink :to="'/'" :icon="GiftIcon"></SideBarLink>

				<SideBarLink
					:to="'/flash-sale'"
					:icon="LightningBoltIcon"
				></SideBarLink>
			</span>

			<span v-else>
				<SideBarLink
					:to="'/'"
					:icon="GiftIcon"
					:link="'Airdrop'"
				>
				</SideBarLink>

				<SideBarLink
					:to="'/nuclear-swap'"
					:icon="LightningBoltIcon"
					:link="'Nuclear Swap'"
				>
				</SideBarLink>
			</span>
		</h1>

		<span
			class="collapse-icon"
			@click="toggleSideBar"
			:class="{ 'rotate-180': collapse }"
		>
			<ChevronDoubleLeftIcon class="h-5 w-5" />
		</span>
	</div>
</template>

<script setup>
	import { collapse, sideBarWidth, toggleSideBar } from './state'
	import {
		ChevronDoubleLeftIcon,
		GiftIcon,
		LightningBoltIcon,
	} from '@heroicons/vue/solid'
	import SideBarLink from './SideBarLink.vue'
	import { computed, ref, watch } from 'vue'
	import { useStore } from 'vuex'

	const store = useStore()

	let walletAddress = ref('Connect Wallet')

	// beforeCreated
	// store.dispatch(CONNECT_WALLET_ACTION)
	// beforeCreated

	const walletInfo = computed(() => 'info')

	const onPressConnectWallet = () => {
		console.log('connect')
	}

	watch(walletInfo, (newValue, oldValue) => {
		walletAddress.value = newValue
	})
</script>

<style style="css" scoped>
	@import '@/tailwind.css';

	.sidebar {
		color: white;
		background-color: var(--primary-color);

		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;

		transition: 0.3s ease;
	}

	.collapse-icon {
		position: absolute;
		bottom: 0;
		align-items: center;
		justify-content: center;
		padding: 0.75em;
		color: rgba(255, 255, 255, 0.7);
		transition: 0.2s linear;
	}

	.rotate-180 {
		transform: rotate(180deg);
		transition: 0.2s linear;
	}
</style>
