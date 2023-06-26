<template>
	<n-card title="实验管理">
		<!-- 分割线 -->
		<n-divider></n-divider>
		<!-- 左侧班级右侧实验,左右两侧选择可以分配 -->

		<el-tabs tab-position="left" style="height: 600px" class="demo-tabs">
			<el-tab-pane
				v-for="item in classList"
				:key="item.id"
				:label="item.name"
			>
				<span v-for="exp in item.exps" :key="exp.id">
					{{ exp.name }}</span
				>
			</el-tab-pane>
		</el-tabs>
		<!-- 分割线 -->
		<n-divider></n-divider>
		<!-- 实验详情 -->
	</n-card>
</template>
<script setup lang="ts">
const classList = ref([
	{
		id: 1,
		name: '计算机科学与技术1班',
		exps: [
			{ id: 1, name: '实验1', state: 0 },
			{ id: 2, name: '实验2', state: 1 },
		],
	},
	{
		id: 1,
		name: '计算机科学与技术1班',
		exps: [
			{ id: 1, name: '实验1', state: 0 },
			{ id: 2, name: '实验2', state: 1 },
		],
	},
	{
		id: 1,
		name: '计算机科学与技术1班',
		exps: [
			{ id: 1, name: '实验1', state: 0 },
			{ id: 2, name: '实验2', state: 1 },
		],
	},
	{
		id: 1,
		name: '计算机科学与技术1班',
		exps: [
			{ id: 1, name: '实验1', state: 0 },
			{ id: 2, name: '实验2', state: 1 },
		],
	},
	{
		id: 1,
		name: '计算机科学与技术1班',
		exps: [
			{ id: 1, name: '实验1', state: 0 },
			{ id: 2, name: '实验2', state: 1 },
		],
	},
])
</script>

<style lang="less">
.demo-tabs > .el-tabs__header {
	width: 200px;
	font-size: 14px;
}
.demo-tabs > .el-tabs__content {
	padding: 32px;
	color: #6b778c;
	font-size: 32px;
	font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
	height: 100%;
}
</style>
