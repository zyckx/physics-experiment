<template>
	<div class="form-wrap">
		<n-card title="登录" bordered>
			<n-form
				ref="formRef"
				:model="model"
				:rules="rules"
				size="large"
				:show-label="false"
				class="form"
			>
				<n-form-item path="userName">
					<n-input
						v-model:value="model.userName"
						placeholder="请输入用户名"
					/>
				</n-form-item>
				<n-form-item path="password">
					<n-input
						v-model:value="model.password"
						type="password"
						show-password-on="click"
						placeholder="请输入密码"
					/>
				</n-form-item>
				<!-- 选择身份 -->
				<n-form-item>
					<n-select
						v-model:value="model.role"
						:options="options"
						placeholder="请选择身份"
						:reset-menu-on-options-change="false"
						@scroll="handleScroll"
						@on-update:value="handleUpdateValue"
					/>
				</n-form-item>
				<n-space :vertical="true" :size="24">
					<div class="flex-y-center justify-between">
						<n-checkbox v-model:checked="rememberMe"
							>记住我</n-checkbox
						>
						<n-button :text="true" @click="forgetPwd()"
							>忘记密码？</n-button
						>
					</div>
					<n-button
						type="primary"
						size="large"
						:block="true"
						:round="true"
						:loading="loginLoading"
						@click="handleSubmit"
					>
						确定
					</n-button>
				</n-space>
				<other-account @login="handleLoginOtherAccount" />
			</n-form>
		</n-card>
	</div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/GlobalStore'
const router = useRouter()
const store = useGlobalStore()
const studentNavList = [
	{
		title: '首页',
		link: '/',
		icon: 'home',
	},
	{
		title: '题目',
		link: '/paper',
	},
]
const teacherNavList = [
	{
		title: '首页',
		link: '/',
		icon: 'home',
	},
	{
		title: '题目管理',
		link: '/paper-manage',
	},
	{
		title: '批阅报告',
		link: '/report-manage',
	},
]

const loginLoading = ref(false)
const formRef = ref()
const forgetPwd = () => {
	router.push('/forgetPwd')
}
const handleUpdateValue = (val: any) => {
	console.log(val)
}
const model = reactive({
	userName: '',
	password: '',
	role: '0',
})
const options = [
	{
		label: '请选择身份',
		value: '0',
	},
	{
		label: '学生',
		value: '1',
	},
	{
		label: '教师',
		value: '2',
	},
]
const handleScroll = (e: any) => {
	console.log(e)
}
const rules = reactive({
	userName: [
		{
			required: true,
			message: '请输入用户名',
		},
	],
	password: [
		{
			required: true,
			message: '请输入密码',
		},
	],
})
const rememberMe = ref(false)

const handleSubmit = async () => {
	if (model.role === '0') {
		ElMessage.error('请选择身份')
		return
	}
	router.push('/')
	store.IsLogin = true
	store.NavList = model.role === '1' ? studentNavList : teacherNavList
	store.userInfo.role = model.role
	console.log(store.NavList)
}
const handleLoginOtherAccount = (type: string) => {
	console.log(type)
}
</script>

<style lang="scss" scoped>
.form-wrap {
	width: 100%;
	max-width: 400px;
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding: 0 20px;
	.form {
		width: 100%;
		.form-item {
			.input {
				height: 50px;
				border-radius: 25px;
				&:focus {
					border-color: #409eff;
				}
			}
		}
		.space {
			margin-top: 20px;
			.button {
				height: 50px;
				border-radius: 25px;
			}
		}
	}
}
</style>
