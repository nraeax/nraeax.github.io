<template>
	<nav class="hidden md:flex items-center justify-between gap-6">
		<NuxtLink to="/" class="text-sm" activeClass="text-blue-500">Home</NuxtLink>
		<NuxtLink to="/articles" class="text-sm font-medium" activeClass="text-blue-500">Articles</NuxtLink>
		<NuxtLink to="/projects" class="text-sm font-medium" activeClass="text-blue-500">Projects</NuxtLink>
		<NuxtLink to="/contact" class="text-sm font-medium" activeClass="text-blue-500">Contact</NuxtLink>
	</nav>
	<button class="w-6 h-6 flex items-center justify-center md:hidden"><Icon name="heroicons:bars-3-20-solid" class="w-5 h-5"/></button>
</template>