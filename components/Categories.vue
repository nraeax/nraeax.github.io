<script setup lang="ts">
const { data: categories } = await queryContent('/articles')
</script>

<template>
	<aside class="col-span-3">
		<h2>Categories</h2>
		<ul>
			<li v-for="(category, index) in categories" :key="index">{{ category }}</li>
		</ul>
	</aside>
</template>