// const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const ElementPlus = require('unplugin-element-plus/webpack')

module.exports = defineConfig({
	transpileDependencies: true,
	// 方式一
	/* publicPath: '/',
		 outputDir: './build', // 默认打包到dist文件夹下 */
	// 方式二(1)
	configureWebpack: {
		// 这个里面的配置，和webpack中的一致，本质上通过merge合并
		/* resolve: {
			alias: {
				views: '@/views' //vue默认在path.resolve中已配置了@对应src目录
			}
		} */
		module: {
			exprContextCritical: false
		},
		devServer: {
			proxy: {
				'/dev': {
					target: 'http://codercba.com:5000', // 代理的目标地址，默认情况下将代理 http://152.136.185.210:5000/dev 这个路径
					pathRewrite: {
						'^/dev': '' // 在代理路径中删除掉/dev
					},
					secure: false, // 在https的情况下，仍代理，默认为true
					changeOrigin: true // 表示是否更新代理后请求的headers中host地址。
				}
			}
		},
		plugins: [
			AutoImport({
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			}),
			ElementPlus()
		]
		// plugins: [ElementPlus()]
	}
	// 方式二(2)
	/* configureWebpack(config) {
		config.resolve.alias = {
			// 配置@，使用绝对路径
			'@': path.resolve(__dirname, 'src'),
			views: '@/views'
		}
	}, */
	// 方式三
	/* chainWebpack(config) {
		config.resolve.alias
			.set('@', path.resolve(__dirname, 'src'))
			.set('views', '@/views')
	} */
})
