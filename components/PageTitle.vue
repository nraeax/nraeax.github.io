<script setup lang="ts">
  const route = useRoute()
</script>

<template>
	<h1 class="text-6xl font-bold my-8">{{ route.meta.title }}</h1>
</template>