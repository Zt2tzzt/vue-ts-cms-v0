import storage from '@/utils/cache'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/login',
		component: () => import('@/view/login/Login.vue')
	},
	{
		path: '/main',
		component: () => import('@/view/main/Main.vue')
	}
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

router.beforeEach(to => {
	if (to.path !== '/login') {
		const token = storage.getCache('token')
		return token ? undefined : '/login'
	}
})

export default router
