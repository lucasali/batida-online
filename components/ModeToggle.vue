<script lang="ts" setup>
const colorMode = useColorMode()

const toggleState = ref(false)
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')

function handleClick() {
  alert('hello!')
}
</script>

<template>
  <DropdownMenuRoot v-model:open="toggleState">
    <DropdownMenuTrigger
      class="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-muted text-muted-foreground outline-none hover:bg-accent hover:text-accent-foreground"
      aria-label="Change theme"
    >
      <Icon name="radix-icons:hamburger-menu" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[220px] rounded-md bg-card p-[5px] outline-none will-change-[opacity,transform]"
        :side-offset="5"
      >
        <DropdownMenuItem
          value="system"
          class="group relative flex select-none items-center justify-between gap-2 rounded-md bg-muted text-card-foreground outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:text-muted-foreground data-[highlighted]:text-accent-foreground"
          @click="handleClick"
        >
          System
        </DropdownMenuItem>
        <DropdownMenuItem
          value="light"
          class="group relative flex select-none items-center justify-between gap-2 rounded-md bg-muted text-card-foreground outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:text-muted-foreground data-[highlighted]:text-accent-foreground"
          @click="handleClick"
        >
          Light
          <div>
            <Icon name="radix-icons:sun"></Icon>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          value="dark"
          class="group relative flex select-none items-center justify-between gap-2 rounded-md bg-muted text-card-foreground outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:text-muted-foreground data-[highlighted]:text-accent-foreground"
          @click="handleClick"
        >
          Dark
          <div>
            <Icon name="radix-icons:moon"></Icon>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
