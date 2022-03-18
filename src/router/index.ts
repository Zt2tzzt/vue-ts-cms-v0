import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/login'
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

export default router
