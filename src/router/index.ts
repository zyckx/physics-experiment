import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '首页',
		component: () => import('../Layout/baseLayout.vue'),
		children: [
			{
				path: '/',
				name: '',
				meta: {
					requireAuth: true,
				},
				component: () => import('../views/index/index.vue'),
			},
			//学生路由
			{
				path: '/experiments',
				name: '实验',
				meta: {
					requireAuth: true,
				},
				component: () => import('../views/Students/Experiments.vue'),
			},
			{
				path: '/examination-paper',
				name: '所有实验',
				meta: {
					requireAuth: true,
				},
				component: () =>
					import('../views/Students/ExaminationPaper.vue'),
			},
		],
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login/Login.vue'),
	},

	{
		path: '/:catchAll(.*)',
		name: '404',
		component: () => import('../views/404/404.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

//全局开启路由守卫，检验cookie
router.beforeEach((to, from, next) => {
	//跳转到登录页
	if (to.path === '/login') {
		next()
	} else {
		// 检查权限路由
		if (to.meta.requireAuth) {
			// 检查cookie
			// if (document.cookie.indexOf('ticket') === -1) {
			const user = JSON.parse(sessionStorage.getItem('user') || '{}')
			console.log(user)

			if (user.IsLogin === null) {
				// ElMessage.error('请登录')
				next('/login')
			} else {
				next()
			}
		}
	}
})
export default router
