<script lang="ts" setup>
	const colorMode = useColorMode();
	const toggle = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
	<button @click="toggle" class="button button--icon">
		<ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="icon w-5 h-5 text-slate-600 dark:text-white/90" />
      <Icon v-else name="heroicons-outline:sun" class="icon" />
    </ColorScheme>
	</button>	
</template>