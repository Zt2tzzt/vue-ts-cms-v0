import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState, IRootWithModule } from './type'
import login from './login'
import system from './main/system'
import dashboard from './main/analysis/dashboard'
import { getPageListData } from '@/service/main/system'

const store = createStore<IRootState>({
	state() {
		return {
			entireDepartment: [],
			entireRole: [],
			entireMenu: []
		}
	},
	mutations: {
		changeEntireDepartment(state, list) {
			state.entireDepartment = list
		},
		changeEntireRole(state, list) {
			state.entireRole = list
		},
		changeEntireMenu(state, list) {
			state.entireMenu = list
		}
	},
	actions: {
		getInitialDataAction({ commit }) {
			// 请求部门，角色和菜单数据。
			getPageListData('/department/list', {
				offset: 0,
				size: 1000
			}).then(res => {
				commit('changeEntireDepartment', res.data.list)
			})
			getPageListData('/role/list', {
				offset: 0,
				size: 1000
			}).then(res => {
				commit('changeEntireRole', res.data.list)
			})
			getPageListData('/menu/list', {}).then(res => {
				commit('changeEntireMenu', res.data.list)
			})
		}
	},
	modules: {
		login,
		system,
		dashboard
	}
})

/**
 * @description: 此函数用于，用户刷新页面时执行的函数，用于初始化登录信息，包括token，用户信息，用户菜单
 * @Author: ZeT1an
 */
export function setupStore() {
	// 初始化登录后获取的数据。
	store.dispatch('login/loadLocalLogin')
}

/**
 * @description: 此函数用于，封装自己的useStore函数，使得使用子模块的数据时加入类型检测。
 * @Author: ZeT1an
 * @return {Store<IRootWithModule>}
 */
export function useStore(): Store<IRootWithModule> {
	return useVuexStore()
}

export default store
