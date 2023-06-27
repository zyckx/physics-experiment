import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'@vueuse/core',
				{
					'naive-ui': [
						'useDialog',
						'useMessage',
						'useNotification',
						'useLoadingBar',
					],
				},
			],
			resolvers: [ElementPlusResolver()],
			dts: 'src/auto-imports.d.ts',
			eslintrc: {
				enabled: true,
			},
		}),
		Components({
			resolvers: [NaiveUiResolver(), ElementPlusResolver()],
		}),
	],
	//配置别名
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	server: {
		proxy: {
			'/api': {
				// target: "http://localhost:8088/api",
				target: 'http://localhost/',
				changeOrigin: true, //是否跨域
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
			'/baidu': {
				// target: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
				target: 'https://www.baidu.com/sugrec',
				changeOrigin: true, //是否跨域
				rewrite: (path) => path.replace(/^\/baidu/, ''),
			},
		},
	},
})
