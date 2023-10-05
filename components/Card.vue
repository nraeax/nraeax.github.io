<script setup lang="ts">
  defineProps({
    href: String,
    title: String,
    date: String,
  })
</script>

<template>
  <a :href="href">
    <h2>{{ title}}</h2>
    <time :datetime="date">{{ date }}</time>
  </a>
</template>