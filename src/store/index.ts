import { createStore } from 'vuex'
import { RootState } from './type'
import login from './login'

const store = createStore<RootState>({
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
 * @description: 用户刷新页面时执行的函数，用于初始化登录信息，包括token，用户信息，用户菜单
 * @Author: ZeT1an
 */
export function setupStore() {
	store.dispatch('login/loadLocalLogin')
}

export default store
