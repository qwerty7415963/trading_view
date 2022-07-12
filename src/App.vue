<template>
	<SideBar></SideBar>
	<div :style="{ 'margin-left': sideBarWidth }">
		<router-view />
	</div>
</template>

<script setup>
	import SideBar from './components/sidebar/SideBar.vue'
	import { sideBarWidth } from '@/components/sidebar/state'
</script>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	textarea:focus,
	input:focus {
		outline: none;
	}
</style>
