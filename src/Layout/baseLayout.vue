<template>
	<Header />
	<div class="main_wrap">
		<BreadCrumbs />
		<router-view></router-view>
	</div>
	<Footer />
	<BackTop />
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.main_wrap {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
	// height: 100%;
	min-height: 500px;
}
</style>
