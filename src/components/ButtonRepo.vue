<template>
  <div class="ml-3 inline-flex rounded-md shadow">
    <button
      @click="onButtonClicked"
      class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none"
      >{{text}}</button
    >
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "No Text"
  }
})

const emit = defineEmits(['onClickedButton'])

const onButtonClicked = () => {
  emit('onClickedButton')
}
</script>