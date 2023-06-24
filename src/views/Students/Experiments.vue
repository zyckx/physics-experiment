<template>
	<n-card title="卡片插槽示例">
		<template #header-extra>
			已完成项实验， 未完成项实验， 待审批实验项实验， 审批未通过项实验
		</template>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column
				prop="date"
				label="日期"
				width="180"
			></el-table-column>
			<el-table-column prop="name" label="实验名称"></el-table-column>
			<el-table-column prop="state" label="实验状态" width="180">
				<template #default="scope">
					<el-tag type="success" @click="test(scope)">已完成</el-tag>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="180">
				<template #default="scope">
					<el-button type="success" size="small" @click="test(scope)"
						>查看</el-button
					>
					<el-button type="warning" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<template #action> #action </template>
	</n-card>
</template>
<script setup lang="ts">
const tableData = reactive([
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
])
const test = (scope: any) => {
	console.log(scope)
}
</script>

<style lang="scss" scoped></style>
