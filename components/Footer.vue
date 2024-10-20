<script lang="ts" setup>
import { format } from '@formkit/tempo'

const date = format(new Date(), 'long')
</script>

<template>
  <footer>
    <p class="text-pretty text-center text-sm text-zinc-500">
      {{ date }}
    </p>
  </footer>
</template>
