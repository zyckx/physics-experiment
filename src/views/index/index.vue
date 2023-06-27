<template>
	<n-card
		title="欢迎登录物理实验信息提交系统!"
		:style="{ textAlign: 'center', marginTop: '20px', fontSize: '23px' }"
	>
		<n-card
			title="您当前登录类型"
			hoverable
			:style="{ width: '200px', fontSize: '14px' }"
			class="login-type"
		>
			{{ userStore.userInfo.role === '1' ? '学生用户' : '教师用户' }}
			13123
		</n-card>
		<n-card
			hoverable
			:style="{ width: '200px', marginTop: '20px', color: '#f4235f' }"
		>
			{{ userStore.userInfo.role === '1' ? '如果有问题请联系老师' : '' }}
		</n-card>
	</n-card>
</template>
<script setup lang="ts">
import { useGlobalStore } from '../../store/GlobalStore'

const userStore = useGlobalStore()
</script>

<style lang="less" scoped>
:deep(.n-card-header__main) {
	font-size: 20px;
}
</style>
