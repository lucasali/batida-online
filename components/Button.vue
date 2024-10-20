<script lang="ts" setup>
export interface ButtonProps {
  type?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  to?: string
  link?: boolean
  onClick?: (event: MouseEvent) => void
}

const { type = 'default', size = 'default', disabled, to, onClick, link } = defineProps<ButtonProps>()

const classes = computed(() => {
  return [
    'inline-flex cursor-pointer items-center justify-center whitespace-nowrap bg-transparent text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 sm:transition-transform',
    {
      'rounded-2xl px-4 py-2': size === 'default',
      'rounded-xl px-3': size === 'sm',
      'rounded-2xl px-8 py-4': size === 'lg',
      'rounded-full h-10 w-10': size === 'icon',
      'bg-primary text-zinc-500 hover:bg-white': type === 'default',
      'text-foreground underline-offset-4 hover:underline': type === 'link'
    }
  ]
})
</script>

<template>
  <button :class="classes" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style></style>
