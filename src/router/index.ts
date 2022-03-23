import storage from '@/utils/cache'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { firstRoute } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/Login.vue')
	},
	{
		path: '/main',
		name: 'main',
		component: () => import('@/views/main/Main.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () => import('@/views/not-fount/NotFound.vue')
	}
	/**
	 * 后台权限设计的思想之一：RBAC(role based access control)基于访问权限控制的角色管理。
	 * 	维护用户表，权限表和关系表。
	 * 理解3种在前端控制权限的方法，
	 * 	方法一：注册所有路由，弊端：用户可通过手动改url实现禁止的权限。
	 * 	方法二：在前端用数组维护好各个角色对应的路由，获取角色后进行注册，弊端：后端新增角色需要前端修改代码再部署。
	 * 	方法三：拿到菜单后，根据用户菜单返回的数据动态添加路由。
	 * 		1. 后端返回数据中有component字段，里面是组件名称，如Role.vue
	 * 		2. 后端只返回path，前端根据已有的配置，找到对应的component。
	 */
	// 使用coderwhy工具：npx coderwhy add3page role -d src/views/main/system/role
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

// 导航守卫
router.beforeEach(to => {
	// 判断有无token，没有则条状登录页
	if (to.path !== '/login') {
		const token = storage.getCache('token')
		if (!token) return '/login'
	}
	// 为'/main'设置默认路由，并跳转。
	if (to.path === '/main') {
		return firstRoute.path
	}
})

export default router
