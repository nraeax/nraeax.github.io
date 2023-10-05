<script lang="ts" setup>
	const colorMode = useColorMode();
	const toggle = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
	<button @click="toggle" class="flex items-center">
		<ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="w-5 h-5 text-slate-600 dark:text-white/90" />
      <Icon v-else name="heroicons-outline:sun" class="w-5 h-5 text-slate-600 dark:text-white/90" />
    </ColorScheme>
	</button>	
</template>