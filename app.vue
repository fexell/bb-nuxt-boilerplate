<script setup>
  let store

  if(import.meta.client) {
    store                                   = reactive({ isDesktop: window.matchMedia('(min-width: 767px)').matches })

    window.addEventListener('resize', () => store.isDesktop = window.matchMedia('(min-width: 767px)').matches)
  }
</script>

<template>
  <main
    id='App'
    class='app'
    :class='{
      "is-desktop": store.isDesktop,
      "is-mobile": !store.isDesktop
    }'>
    <div
      class='app-container'>
      <NuxtLayout />
    </div>  
  </main>
</template>
