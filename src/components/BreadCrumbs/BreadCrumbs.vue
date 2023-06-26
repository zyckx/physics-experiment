<template>
	<n-breadcrumb separator=">">
		<!-- <n-breadcrumb-item :to="{ path: '/' }">首页</n-breadcrumb-item> -->
		<n-breadcrumb-item v-for="(item, index) in route.matched" :key="index">
			<span v-if="item.meta.breadcrumb">{{ item.meta.breadcrumb }}</span>
			<span v-else>{{ item.name }}</span>
		</n-breadcrumb-item>
	</n-breadcrumb>
</template>
<script setup lang="ts">
const route = useRoute()
// console.log(route)
onMounted(() => {
	console.log(route.matched[0].children)
})
</script>

<style lang="less" scoped></style>
