<script lang="ts" setup>
import { format } from '@formkit/tempo'

useHead({
  titleTemplate(title) {
    return `Blog • ${title}`
  }
})

const date = format(new Date(), 'long')
</script>

<template>
  <section class="mx-auto max-w-lg">
    <div class="my-4 flex flex-col">
      <div
        v-for="i in 3"
        class="hover:border-accent flex cursor-pointer justify-between border-b py-6 duration-300 animate-in"
      >
        <h3>Electron + Vite + Vue 3 + Tailwindcss</h3>

        <p>March 1, 2024</p>
      </div>
    </div>

    <p class="text-pretty text-center">
      {{ date }}
    </p>
  </section>
</template>

<style></style>
