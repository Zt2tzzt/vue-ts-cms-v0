import { IUserPageListDataParam } from '@/service/main/system/type'
import { getPageListData } from '@/service/main/system'
import { Module } from 'vuex'
import { IRootState } from './../../type'
import { ISystemState, IUserList, IRoleData } from './type'
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
		}
	}
}

export default system
