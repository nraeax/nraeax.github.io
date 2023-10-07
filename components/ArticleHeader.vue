<template>
	<header class="bg-black/20">
		<div class="container mx-auto py-16">
			<div class="mb-4 flex items-center">
				<div class="bg-black w-7 h-7 flex items-center justify-center mr-4">
					<Icon name="heroicons:home-20-solid"/>
				</div>
				{{ doc._path }}
			</div>
			<div class="w-full lg:w-1/2">
				<h1>{{ doc.title }}</h1>
				<p>{{ doc.description }}</p>
			</div>
		</div>
	 </header>
</template>