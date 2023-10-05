<script setup lang="ts">
  const route = useRoute()
</script>

<template>
	<header class="mb-8 text-center">
		<h1>{{ route.meta.title }}</h1>
		<p class="text-lg">{{ route.meta.description }}</p>
	</header>
</template>

