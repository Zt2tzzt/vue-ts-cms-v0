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
				view: '@/view' //vue默认再path.resolve中已配置了@对应src目录
			}
		} */
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
			view: '@/view'
		}
	}, */
	// 方式三
	/* chainWebpack(config) {
		config.resolve.alias
			.set('@', path.resolve(__dirname, 'src'))
			.set('view', '@/view')
	} */
})
