import { RouteRecordRaw } from 'vue-router'
export const studentRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'baseLayout',
		component: () => import('../Layout/baseLayout.vue'),
		children: [
			{
				path: '/',
				name: 'index',
				component: () => import('../views/index/index.vue'),
			},
		],
	},
]
