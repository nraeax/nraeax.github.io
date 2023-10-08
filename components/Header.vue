<template>
	<header class="sticky top-0 z-40 h-20 w-screen flex items-center">
		<div class="absolute top-0 bg-white/50 w-full z-50" :class="showMenu ? 'flex' : 'hidden'">kkk</div>
		<div class="container mx-auto">
			<div class="grid grid-cols-12">
				<HeaderBrand/>
				<div class="col-span-9 flex items-center justify-end">
					<HeaderNavigation/>
					<HeaderControls/>
				</div>
			</div>
		</div>
	</header>
</template>