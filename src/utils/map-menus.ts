import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
	const routes: RouteRecordRaw[] = []
	// 1.先默认加载所有的routes
	const allRoutes: RouteRecordRaw[] = []
	// 使用webpack中reuire方法，加载/router/main下所有ts结尾的文件，第二个参数true代表递归加载， 不写/\.ts$/是考虑到可能会有tsx文件需要加载
	const routeFiles = require.context('@/router/main', true, /\.ts/)
	// 调用keys方法，返回一个文件路径构成的数组
	routeFiles.keys().forEach(path => {
		// 使用CommonJS中的require方法，加载所有路由对象。
		const route = require('@/router/main' + path.slice(1))
		allRoutes.push(route.default)
	})

	// 2.根据菜单获取需要添加的routes
	const _recursseGetRoute = (userMenus: any[]) => {
		userMenus.forEach(menu => {
			if (menu.type === 2) {
				// 请求来的 userMenus 中的 url 与前端维护好的所有 Route 对象中的 path 做匹配。
				const route = allRoutes.find(r => r.path === menu.url)
				if (route) routes.push(route)
			} else {
				_recursseGetRoute(menu.children)
			}
		})
	}
	// 处理userMenu中的一级菜单和二级菜单。
	_recursseGetRoute(userMenus)

	return routes
}
