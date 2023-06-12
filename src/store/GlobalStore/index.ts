import { defineStore } from 'pinia'

interface INavList {
	title: string
	link: string
	icon?: string
}
export const useGlobalStore = defineStore({
	id: 'user',
	state: () => ({
		userInfo: {
			username: '',
			avatar: '',
			role: '1',
		},
		NavList: [] as INavList[],
		Role: '',
		IsLogin: false,
	}),
	actions: {
		loginOut() {
			this.IsLogin = false
			this.userInfo = {
				username: '',
				avatar: '',
				role: '',
			}
		},
	},
	persist: {
		enabled: true, // 这个配置代表存储生效，而且是整个store都存储
	},
})
