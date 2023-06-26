<template>
	<div class="paper-wrap">
		<n-card>
			<div class="paper-title">
				<h2>试卷</h2>
				<div class="stu-info">
					<div class="stu-info-item">
						<span>学号：</span>
						<span>2018210405001</span>
					</div>
					<div class="stu-info-item">
						<span>姓名：</span>
						<span>张三</span>
					</div>
					<div class="stu-info-item">
						<span>班级：</span>
						<span>软件工程1801</span>
					</div>
				</div>
			</div>
			<n-divider title-placement="left"> 一、实验目的</n-divider>
			<div class="paper-purpose">
				<ol>
					<li>
						1、观察液体的内摩擦现象，用落球法测定液体的黏滞系数
					</li>
					<li> 2、掌握读书显微镜的使用方法 </li>
					<li> 3、学习用外延拓展法处理数据获得理想数值的方法 </li>
				</ol>
			</div>
			<n-divider title-placement="left"> 二、实验仪器</n-divider>
			<div class="paper-instrument">
				<p class="instruments"
					>多管黏滞系数测量仪、小钢球、密度计、温度计、气泡水准器、小磁铁、读数显微镜、秒表、米尺、游标卡尺
				</p>
			</div>
			<n-divider title-placement="left"> 三、实验原理</n-divider>
			<div class="paper-principle">
				<p class="principles"> 具体内容请参照实验指导书进行学习 </p>
			</div>

			<n-divider title-placement="left"> 四、数据记录与处理</n-divider>
			<div class="paper-data">
				<h2>(一) 基本量测量 </h2>
				<n-form
					ref="formRef"
					:model="model"
					:rules="rules"
					size="large"
					:show-label="false"
					class="form"
				>
					<n-form-item path="userName">
						<n-input-group>
							<n-input-group-label
								>测量前蓖麻油的温度</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item path="password">
						<n-input-group>
							<n-input-group-label
								>测量后蓖麻油的温度</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>

					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>两刻线A、B间的距离S</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>蓖麻油的密度ρ₀</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>小钢球的密度ρ(重力加速度g=9.80m·s⁻²)</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
				</n-form>
				<h2>(二) 测定小球下落时间 </h2>
				<n-data-table
					:key="(row) => row.key"
					:columns="columns"
					:data="data"
					:pagination="paginationRef"
					:on-update:page="handlePageChange"
				/>
			</div>
			<table
				border="1"
				style="
					width: 100%;
					border-collapse: collapse;
					border: 1px solid #000;
				"
			>
				<tr>
					<td>1</td>
					<td>2</td>
				</tr>
				<tr>
					<td>3</td>
					<td>4</td>
				</tr>
			</table>
		</n-card>
	</div>
</template>
<script setup lang="ts">
// 关闭ts检查
// @ts-nocheck
import { ref, computed, nextTick } from 'vue'
import { NInput } from 'naive-ui'

interface DataItem {
	key: number
	name: string
	age: number
	address: string
}

const createData = (): DataItem[] =>
	Array.from({ length: 100 }).map((_, index) => ({
		key: index,
		name: `John Brown ${index}`,
		age: (Math.random() * 40) | 0,
		address: `New York No. ${index} Lake Park`,
	}))

const ShowOrEdit = {
	props: {
		value: [String, Number],
		onUpdateValue: [Function, Array],
	},
	setup(props: {
		value: string | number
		onUpdateValue: (value: string | number) => void
	}) {
		const isEdit = ref(false)
		const inputRef = ref<HTMLInputElement | null>(null)
		const inputValue = ref(props.value)

		const handleOnClick = () => {
			isEdit.value = true
			nextTick(() => {
				inputRef.value?.focus()
			})
		}

		const handleChange = () => {
			props.onUpdateValue(inputValue.value)
			isEdit.value = false
		}

		return () =>
			h(
				'div',
				{
					style: 'min-height: 22px',
					onClick: handleOnClick,
				},
				isEdit.value
					? h(NInput, {
							ref: inputRef,
							value: inputValue.value,
							onUpdateValue: (v) => {
								inputValue.value = v
							},
							onChange: handleChange,
							onBlur: handleChange,
					  })
					: props.value
			)
	},
}

const model = ref({
	userName: '',
	password: '',
})
const rules = ref({
	userName: [
		{ required: true, message: '请输入用户名', trigger: 'blur' },
		{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
	],
	password: [
		{ required: true, message: '请输入密码', trigger: 'blur' },
		{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
	],
})
const data = ref<DataItem[]>(createData())
const page = ref(1)

const getDataIndex = (key: number) => {
	return data.value.findIndex((item) => item.key === key)
}

const handlePageChange = (curPage: number) => {
	page.value = curPage
}

const paginationRef = computed(() => ({
	pageSize: 10,
	page: page.value,
}))

const columns = [
	{
		title: 'Name',
		key: 'name',
		width: 150,
		render(row: DataItem) {
			const index = getDataIndex(row.key)
			return h(ShowOrEdit, {
				value: row.age,
				onUpdateValue(v) {
					data.value[index].age = v
				},
			})
		},
	},
	{
		title: 'Age',
		key: 'age',
		width: 100,
		render(row: DataItem) {
			const index = getDataIndex(row.key)
			return h(ShowOrEdit, {
				value: row.age,
				onUpdateValue(v) {
					data.value[index].age = v
				},
			})
		},
	},
	{
		title: 'Address',
		key: 'address',
		render(row: DataItem) {
			const index = getDataIndex(row.key)
			return h(ShowOrEdit, {
				value: row.age,
				onUpdateValue(v) {
					data.value[index].age = v
				},
			})
		},
	},
]
</script>

<style lang="less" scoped></style>
