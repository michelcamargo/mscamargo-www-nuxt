<script setup lang="ts">
  const colorMode = useColorMode()
  const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-16-solid' : 'i-heroicons-sun-16-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
      :style="{padding: 0, margin: 0, height: 'fit-content'}"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
