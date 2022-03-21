import type { IBreadcrumb } from '@/base-ui/breadcrumb/type/index'
import { RouteRecordRaw } from 'vue-router'

// 用于保存第一个被匹配到的路由，作为/main路径的默认路由。
export let firstRoute: RouteRecordRaw

/**
 * @description: 此函数用于收集@/router/mian目录下所有路由文件（.ts），取出它们导出的路由对象，与userMenu中的url做匹配，将匹配后的route对象返回。
 * @Author: ZeT1an
 * @param {any} userMenu 登录后获取的userMenu数组。
 * @return {RouteRecordRaw[]} 匹配好的route对象数组。
 */
export function mapMenusToRoutes(userMenu: any[]): RouteRecordRaw[] {
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
	const _recursseGetRoute = (userMenu: any[]) => {
		userMenu.forEach(menu => {
			if (menu.type === 2) {
				// 二级菜单，请求来的 userMenu 中的 url 与前端维护好的所有 Route 对象中的 path 做匹配。
				const route = allRoutes.find(r => r.path === menu.url)
				if (route) {
					routes.push(route)
					if (!firstRoute) firstRoute = route
				}
			} else {
				// 一级菜单
				_recursseGetRoute(menu.children)
			}
		})
	}
	// 处理userMenu中的一级菜单和二级菜单。
	_recursseGetRoute(userMenu)

	return routes
}

/**
 * @description: 此函数用于，将当前的页面路径（location.path）匹配userMenu
 * @Author: ZeT1an
 * @param {any} userMenu 登陆后获取的userMenu
 * @param {string} currentPath 当前页面路径（location.path）
 * @return {any} 匹配后的userMenu
 */
export function pathMapToMenu(userMenu: any[], currentPath: string, breadcrumbs?: IBreadcrumb[]): any {
	for (const menu of userMenu) {
		switch (menu.type) {
			// case 指定代码块{}，存放语句，否则eslint报错。
			case 1: {
				const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
				if (findMenu) {
					breadcrumbs?.push({ name: menu.name })
					breadcrumbs?.push({ name: findMenu.name })
					return findMenu
				}
				break
			}
			case 2: {
				if (menu.url === currentPath) return menu
			}
		}
	}
}

/**
 * @description: 此函数用于，生成当前页面对应的面包屑配置数组
 * @Author: ZeT1an
 * @param {any} userMenu 登录后获取的userMenu
 * @param {string} currentPath 当前页面path
 * @return {IBreadcrumb[]} 当前页面对应的面包屑配置数组。
 */
export function pathMapBreadcrumbs(userMenu: any, currentPath: string) {
	const breadcrumbs: IBreadcrumb[] = []
	pathMapToMenu(userMenu, currentPath, breadcrumbs)
	return breadcrumbs
}
