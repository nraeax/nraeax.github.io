<script setup lang="ts">
  const props = defineProps({
    href: String,
    title: String,
    date: String,
    image: {
      type: Object,
      required: true,
    }

  })
</script>

<template>
  <a :href="href">
    <img :src="image" :alt="image">
    <h2>{{ title}}</h2>
    <time :datetime="date">{{ date }}</time>
  </a>
</template>