<script setup>
  const mediaStore                          = useMediaStore()

  onMounted(() => {
    mediaStore.handleToggleDesktop()

    window.addEventListener('resize', () => mediaStore.handleToggleDesktop())
  })
</script>

<template>
  <main
    id='App'
    class='app'
    :class='{
      "is-desktop": mediaStore.isDesktop,
      "is-mobile": !mediaStore.isDesktop
    }'>
    <div
      class='app-container'>
      <NuxtLayout />
    </div>  
  </main>
</template>
