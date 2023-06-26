<template>
	<n-card title="待批阅班级">
		<el-row>
			<el-col
				v-for="exp in expLists"
				:key="exp.id"
				:span="5"
				:offset="exp.id > 0 ? 2 : 0"
			>
				<el-card :body-style="{ padding: '0px' }">
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
						class="image"
					/>
					<div class="bottom-content">
						<span>{{ exp.name }}</span>
						<div class="bottom">
							<el-button
								type="primary"
								class="button"
								@click="goToCheckExp(exp.id)"
								>开始批阅</el-button
							>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</n-card>
</template>
<script setup lang="ts">
const route = useRoute()
const router = useRouter()
onMounted(() => {
	console.log(route.params.id)
})
const expLists = ref([
	{
		id: 1,
		name: '实验1',
	},
	{
		id: 2,
		name: '实验2',
	},
	{
		id: 3,
		name: '实验3',
	},
])
const goToCheckExp = (id: number) => {
	console.log('goToCheckExp', id)
	router.push(`/review-student/${id}`)
}
</script>

<style lang="less" scoped>
.bottom-content {
	padding: 14px;
	text-align: center;
	.bottom {
		margin-top: 13px;
		line-height: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		.button {
			padding: 18px;
			min-height: auto;
		}
	}
}

.image {
	width: 100%;
	display: block;
}
</style>
