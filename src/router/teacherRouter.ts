import { RouteRecordRaw } from 'vue-router'
export const teacherRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'baseLayout',
		component: () => import('../Layout/baseLayout.vue'),
	},
]
