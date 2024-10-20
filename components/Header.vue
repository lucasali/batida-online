<script lang="ts" setup></script>

<template>
  <header class="flex items-center justify-center px-6 pt-6 sm:px-10 sm:pt-16">
    <nav class="flex w-full max-w-lg items-center justify-between gap-3">
      <NuxtLink to="/" class="flex items-center gap-6 text-xl"> Lucas Ali </NuxtLink>

      <div class="flex gap-3">
        <NuxtLink to="/blog" class="h-10 focus-visible:outline-none">
          <Button aria-label="Blog"> Blog </Button>
        </NuxtLink>

        <Button> Contact </Button>

        <Button size="icon">
          <Icon name="radix-icons:moon" class="size-5" />
        </Button>
      </div>
    </nav>
  </header>
</template>
