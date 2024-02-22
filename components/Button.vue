<script lang="ts" setup>
export interface ButtonProps {
  type?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  href?: string
  onClick?: (event: MouseEvent) => void
}

const { type = 'default', size = 'default', disabled, href, onClick } = defineProps<ButtonProps>()

const classes = computed(() => {
  return [
    'inline-flex items-center duration-300 animate-in justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      'h-10 px-6 py-2': size === 'default',
      'h-9 rounded-md px-3': size === 'sm',
      'h-11 rounded-md px-8': size === 'lg',
      'h-10 w-10': size === 'icon',
      'bg-primary text-primary-foreground hover:bg-primary/90': type === 'default',
      'bg-destructive text-destructive-foreground hover:bg-destructive/90': type === 'destructive',
      'border border-border bg-background hover:bg-accent hover:text-accent-foreground': type === 'outline',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80': type === 'secondary',
      'hover:bg-accent hover:text-accent-foreground': type === 'ghost',
      'text-foreground underline-offset-4 hover:underline': type === 'link'
    }
  ]
})

const component = computed(() => {
  return
})
</script>

<template>
  <button :class="classes" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style></style>
