<script lang="ts" setup>
	import { ref } from 'vue'
	const showMenu = ref(true)
</script>

<template>
	<nav :class="showMenu ? 'flex' : 'hidden'" class="items-center justify-between gap-8">
		<NuxtLink to="/" class="text-sm font-medium" activeClass="text-green-500">Home</NuxtLink>
		<NuxtLink to="/articles" class="text-sm font-medium" activeClass="text-green-500">Articles</NuxtLink>
		<NuxtLink to="/projects" class="text-sm font-medium" activeClass="text-green-500">Projects</NuxtLink>
		<NuxtLink to="/contact" class="text-sm font-medium" activeClass="text-green-500">Contact</NuxtLink>
	</nav>
	<button @click="showMenu = !showMenu" class="w-6 h-6 flex items-center justify-center">
		<Icon name="heroicons:bars-3-20-solid" class="w-5 h-5"/>
	</button>
</template>