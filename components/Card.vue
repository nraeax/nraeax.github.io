<script setup lang="ts">

  const props = defineProps({
    href: String,
    title: String,
    date: String,
    src: String,
    alt: String
  })

</script>

<template>
  <div class="w-full flex flex-col overflow-hidden rounded-lg ring-2 ring-slate-200 dark:ring-white/25">
    <a :href="href">
      <div>
        <img :src="src" :alt="alt">
      </div>
      <div class="p-3">
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <time :datetime="date">{{ date }}</time>
      </div>
    </a>
  </div>
</template>