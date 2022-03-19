import router from '@/router'
import { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import { accountLoginRequest, requestUserInfoById, requestUserMenuByRoleId } from '@/service/login'
import type { IAccount } from '@/service/login/type'
import storage from '@/utils/cache'

const loginModule: Module<ILoginState, IRootState> = {
	namespaced: true,
	state() {
		return {
			token: '',
			userInfo: {},
			userMenu: {}
		}
	},
	mutations: {
		changeToken(state, token: string) {
			state.token = token
		},
		changeUserInfo(state, userInfo: any) {
			state.userInfo = userInfo
		},
		changeUserMenu(state, userMenu: any) {
			state.userMenu = userMenu
		}
	},
	actions: {
		async accountLoginAction({ commit }, payload: IAccount) {
			// 1.实现登录逻辑
			const loginRes = await accountLoginRequest(payload)
			const { token, id } = loginRes.data
			commit('changeToken', token)
			storage.setCache('token', token)
			// 2.请求用户信息
			const userInfoRes = await requestUserInfoById(id)
			const userInfo = userInfoRes.data
			commit('changeUserInfo', userInfo)
			storage.setCache('userInfo', userInfo)
			// 3.根据用户角色，获取菜单
			const userMenuRes = await requestUserMenuByRoleId(userInfo.role.id)
			const userMenu = userMenuRes.data
			commit('changeUserMenu', userMenu)
			storage.setCache('userMenu', userMenu)
			// 4.跳转首页
			router.push('/main')
		},
		/**
		 * @description: 用户刷新页面时执行的函数，用于初始化登录信息，包括token，用户信息，用户菜单
		 * @Author: ZeT1an
		 */
		loadLocalLogin({ commit }) {
			const token = storage.getCache('token')
			if (token) {
				commit('changeToken', token)
			}
			const userInfo = storage.getCache('userInfo')
			if (userInfo) {
				commit('changeUserInfo', userInfo)
			}
			const userMenu = storage.getCache('userMenu')
			if (userMenu) {
				commit('changeUserMenu', userMenu)
			}
		}
		/* phoneLoginAction({ commit }, payload: any) {
			console.log('执行phoneLoginAction')
		} */
	}
}

export default loginModule
