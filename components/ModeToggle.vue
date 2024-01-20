<script lang="ts" setup>
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
    <DropdownMenuTrigger aria-label="Customise options">
      <Button>test</Button>
    </DropdownMenuTrigger>


  </DropdownMenuRoot>
</template>

<style></style>
