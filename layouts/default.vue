<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <header class="flex items-center justify-center">
    <nav class="flex w-full max-w-lg items-center justify-between gap-3">
      <NuxtLink to="/" class="flex items-center gap-6">
        <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_125_3"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="21"
            y="15"
            width="87"
            height="100"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.1354 37.1676C48.0467 32.7761 55.0949 28.3849 64.4415 26.8707C65.6673 26.7191 66.1269 27.6277 65.6673 28.0819C65.6673 28.0819 65.3116 28.3848 64.9011 28.5362C64.6153 28.6417 64.135 28.6876 64.135 28.6876C58.0061 29.4447 49.2601 33.8799 46.6554 40.5424C46.0425 42.3595 45.2163 44.7402 47.1439 49.2828C49.0716 53.8255 54.7241 57.609 61.3126 58.3661C66.9819 58.7481 66.893 58.3661 66.893 58.3661C76.5 41.0001 87 15 100.5 16.0001C104 16.0001 106.5 18.4998 107 20.5001C109.009 28.5362 98.4569 54.5806 69.8043 60.3346C67.0463 65.7858 63.3689 73.1304 59.998 78.5815C66.1225 80.0383 94.1667 86.379 97.844 104.55C98.5591 107.78 98.5488 114.392 92.7877 114.998C92.2712 115.052 92.4812 114.089 92.6345 113.786C93.4163 112.241 93.9672 110.221 94.4731 107.578C95.5457 101.975 92.7322 87.2875 57.491 81.8364C47.5621 96.0094 35.7438 98.8117 31.9981 98.8117C21.6555 98.8117 20.335 91.5273 21.2327 88.4989C24.7875 76.5064 45.8711 76.5609 56.1881 77.7722C61.8573 68.9898 65.6673 60.7889 65.6673 60.7889C41.4581 59.8803 40.9984 43.4082 45.1354 37.1676ZM32.8124 96.3838C41.8525 96.0909 50.9872 85.512 53.7452 81.1713C50.3743 80.1113 40.9515 79.1546 30.5324 83.2732C30.5324 83.2732 23.3778 86.6818 23.3778 90.7702C23.3778 92.4358 23.7722 96.6767 32.8124 96.3838ZM99 18.4998C89.9599 17.5913 76.6482 45.243 71.3365 57.609C75.1671 56.8519 86.0809 53.6728 96.5 39.4998C100.841 33.5944 108.5 19.4545 99 18.4998Z"
              fill="#FFFCE1"
            />
          </mask>
          <g mask="url(#mask0_125_3)">
            <path
              d="M65.0001 28C57.5001 29.3333 42.9001 34.7 44.5001 45.5C46.1001 56.3 60.8335 59.3333 68.0002 59.5C74.1669 58.8333 89.1002 53.8 99.5002 39C109.9 24.2 105.167 17.8333 101.5 16.5C98.3335 15.6667 90.0002 17.4 82.0002 31C72.0002 48 71.0002 57.5 58.5002 78C46.0002 98.5 34.0002 97.5 31.0002 97.5C28.0002 97.5 14.5002 93 29.0002 82C43.5002 71 82.4998 83.5 91 94.5C97.8002 103.3 96.5001 110.167 95 112.5"
              stroke="#FFFCE1"
              stroke-width="6"
              stroke-linecap="round"
            />
          </g>
        </svg>
        Lucas Ali
      </NuxtLink>

      <div>
        <NuxtLink to="/blog">
          <Button type="link"> Blog </Button>
        </NuxtLink>

        <!-- <Button type="ghost" @click="toggleColorMode">
          <Icon :name="colorMode.value === 'dark' ? 'radix-icons:moon' : 'radix-icons:sun'" class="size-5" />
        </Button> -->

        <select v-model="colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </nav>
  </header>

  <main class="container">
    <slot />
  </main>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  path {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 350px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    stroke-dasharray: 350px 0;
  }
  /* Moving back */
  85% {
    stroke-dasharray: 350px 0;
  }
  95%,
  to {
    stroke-dasharray: 0 350px;
  }
}
path {
  stroke-dashoffset: 1px;
  stroke-dasharray: 350px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}
</style>
