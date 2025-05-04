import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMediaStore                  = defineStore('mediaStore', () => {
  const isDesktop                           = ref(true)

  const handleToggleDesktop                 = (breakpoint = 767) => {
    isDesktop.value                         = window.matchMedia(`(min-width: ${ breakpoint }px)`).matches
  }

  return { isDesktop, handleToggleDesktop }
})