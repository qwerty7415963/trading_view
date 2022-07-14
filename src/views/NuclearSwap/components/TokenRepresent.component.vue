<template>
	<div
		class="flex h-16 cursor-pointer flex-row items-center hover:opacity-80"
		@click="onSelectoken"
	>
		<QuestionMarkCircleIcon class="mr-2 h-10 w-10" />

		<div>
			<div>{{ info.symbol }}</div>
			<div>{{ info.name }}</div>
		</div>
	</div>
</template>
<script setup>
	import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

	const props = defineProps({
		info: {
			type: Object,
		},
	})

	const emits = defineEmits(['selectToken'])

	const onSelectoken = () => {
		emits('selectToken', props.info)
	}
</script>
<style lang=""></style>
