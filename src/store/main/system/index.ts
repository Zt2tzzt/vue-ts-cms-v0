import type { IUserPageListDataParam, IDeleteDataParam } from '@/service/main/system/type'
import {
	createPageData,
	deletePageData,
	editPageData,
	getPageListData
} from '@/service/main/system'
import { Module } from 'vuex'
import { IRootState } from './../../type'
import type { ISystemState, IUserList, IRoleData } from './type'
import titleCase from '@/utils/titleCase'

const system: Module<ISystemState, IRootState> = {
	namespaced: true,
	state() {
		return {
			usersList: [],
			usersCount: 0,
			roleList: [],
			roleCount: 0,
			goodsList: [],
			goodsCount: 0,
			menuList: [],
			menuCount: 0
		}
	},
	mutations: {
		// 用户
		changeUsersList(state, usersList: IUserList[]) {
			state.usersList = usersList
		},
		changeUsersCount(state, usersCount: number) {
			state.usersCount = usersCount
		},
		// 角色
		changeRoleList(state, roleList: IRoleData[]) {
			state.roleList = roleList
		},
		changeRoleCount(state, roleCount: number) {
			state.roleCount = roleCount
		},
		// 商品
		changeGoodsList(state, goodsList: any[]) {
			state.goodsList = goodsList
		},
		changeGoodsCount(state, goodsCount: number) {
			state.goodsCount = goodsCount
		},
		// 菜单
		changeMenuList(state, menuList: any[]) {
			state.menuList = menuList
		},
		changeMenuCount(state, menuCount: number) {
			state.menuCount = menuCount
		}
	},
	getters: {
		pageListData(state) {
			return function (pageName: string) {
				return (state as any)[`${pageName}List`]
			}
		},
		pageListCount(state) {
			return function (pageName: string) {
				return (state as any)[`${pageName}Count`]
			}
		}
	},
	actions: {
		async getPageListAction({ commit }, { pageName, queryInfo }: IUserPageListDataParam) {
			const pageUrl = `/${pageName}/list`
			// 对页面发送请求。
			const pageRes = await getPageListData(pageUrl, queryInfo)
			// 将数据存储到state中
			const { list, totalCount } = pageRes.data
			commit(`change${titleCase(pageName)}List`, list)
			commit(`change${titleCase(pageName)}Count`, totalCount)
		},

		async deletePageDataAction({ dispatch }, { pageName, id }: IDeleteDataParam) {
			// 1.获取pageUrl
			const pageUrl = `/${pageName}/${id}`
			// 2.调用删除的网络请求
			await deletePageData(pageUrl)
			// 3.重新请求最新的数据
			dispatch('getPageListAction', {
				pageName,
				querInfo: {
					offset: 0,
					pageSize: 10
				}
			})
		},

		async createPageDataAction({ dispatch }, { pageName, newData }: any) {
			// 1.创建数据的请求
			const pageUrl = `/${pageName}`
			await createPageData(pageUrl, newData)
			// 2.重新请求最新的数据
			dispatch('getPageListAction', {
				pageName,
				queryInfo: {
					offset: 0,
					size: 10
				}
			})
		},

		async editPageDataAction({ dispatch }, { pageName, editData, id }: any) {
			// 1.创建数据的请求
			const pageUrl = `/${pageName}/${id}`
			await editPageData(pageUrl, editData)
			// 2.重新请求最新的数据
			dispatch('getPageListAction', {
				pageName,
				queryInfo: {
					offset: 0,
					size: 10
				}
			})
		}
	}
}

export default system
