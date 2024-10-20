<script lang="ts" setup>
useHead({
  titleTemplate(title) {
    return `Blog • ${title}`
  }
})
</script>

<template>
  <section class="mx-auto my-32 max-w-lg">
    <div class="my-4 flex flex-col">
      <div
        v-for="i in 3"
        class="hover:border-accent flex cursor-pointer justify-between border-b py-6 duration-300 animate-in"
      >
        <h3>Electron + Vite + Vue 3 + Tailwindcss</h3>

        <p class="text-sm text-zinc-500">March 1, 2024</p>
      </div>
    </div>

    <ContentDoc />
  </section>
</template>

<style></style>
