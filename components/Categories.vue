<script setup lang="ts">
	const { data: articles } = await useAsyncData('article', () => queryContent('/articles').only(['category']).find())
	const categories = articles.value.map((article) => article.category)
	const uniqueCategories = new Set (categories)
	const allCategories = [...uniqueCategories].sort()
</script>

<template>
	<aside class="col-span-3">
		<h2>Categories</h2>
		<ul>
			<li v-for="(category, index) in allCategories" :key="index">{{ category }}</li>
		</ul>
	</aside>
</template>