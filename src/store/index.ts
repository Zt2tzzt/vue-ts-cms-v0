import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState, IRootWithModule } from './type'
import login from './login'

const store = createStore<IRootState>({
	state() {
		return {
			name: 'zzt',
			age: 18
		}
	},
	modules: {
		login
	}
})

/**
 * @description: 此函数用于，用户刷新页面时执行的函数，用于初始化登录信息，包括token，用户信息，用户菜单
 * @Author: ZeT1an
 */
export function setupStore() {
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
