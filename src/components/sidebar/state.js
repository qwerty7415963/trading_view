import { computed, ref } from "vue";

export const collapse = ref(false)
export const toggleSideBar = () => (collapse.value = !collapse.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 45
export const sideBarWidth = computed(
    () => `${collapse.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
