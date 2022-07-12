<template>
	<router-link :to="to" :class="{ active: isActice }" class="link">
		<component :is="icon" class="h-7 w-7"></component>
		<span v-if="!collapse"> {{ link }} </span>
	</router-link>
</template>

<script setup>
	import { collapse } from './state'
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'

	const props = defineProps({
		to: {
			type: String,
			required: true,
		},
		icon: {
			type: Function,
			required: true,
		},
		link: {
			type: String,
		},
	})

	const route = useRoute()
	const isActice = computed(() => route.path === props.to)
</script>

<style scoped>
	.link {
		display: flex;
		align-items: center;

		cursor: pointer;
		position: relative;
		font-weight: 400;
		user-select: none;

		margin: 0.1em;
		padding: 2em 0.4em;
		border-radius: 0.25em;
		height: 1.5em;

		color: white;
		text-decoration: none;
	}

	.link:hover {
		background-color: var(--sidebar-item-hover);
	}

	.link:active {
		background-color: var(--sidebar-item-active);
	}

	.link .icon {
		flex-shrink: 0;
		width: 25px;
		margin-right: 25px;
	}
</style>
