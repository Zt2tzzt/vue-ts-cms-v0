import { IUserPageListDataParam } from '@/service/main/system/type'
import { getPageListData } from '@/service/main/system'
import { Module } from 'vuex'
import { IRootState } from './../../type'
import { ISystemState, IUserList } from './type'

const system: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			userList: [],
			userCount: 0
		}
	},
	mutations: {
		changeUserList(state, userList: IUserList[]) {
			state.userList = userList
		},
		changeUserCount(state, userCount: number) {
			state.userCount = userCount
		}
	},
	actions: {
		async getPageListAction({ commit }, payload: IUserPageListDataParam) {
			const pageRes = await getPageListData(payload.pageUrl, payload.queryInfo)
			const { list, totalCount } = pageRes.data
			commit('changeUserList', list)
			commit('changeUserCount', totalCount)
		}
	}
}

export default system
