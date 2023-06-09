import { IDashboardState } from './main/analysis/type'
import type { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'

export interface IDepartment {
	id: number
	name: string
	parentId: number
	createAt: Date
	updateAt: Date
	leader: string
}

export interface IRoleChild2 {
	id: number
	url?: any
	name: string
	sort?: any
	type: number
	parentId: number
	permission: string
}

export interface IRoleChild {
	id: number
	url: string
	name: string
	sort: number
	type: number
	children: IRoleChild2[]
	parentId: number
}

export interface IRoleMenuList {
	id: number
	name: string
	type: number
	url: string
	icon: string
	sort: number
	children: IRoleChild[]
}

export interface IRole {
	id: number
	name: string
	intro: string
	createAt: Date
	updateAt: Date
	menuList: IRoleMenuList[]
}

export interface IRootState {
	entireDepartment: IDepartment[] // 全部部门
	entireRole: IRole[] // 全部角色
	entireMenu: any[] // 全部菜单数据
}
export interface IRootWithModule extends IRootState {
	login: ILoginState
	system: ISystemState
	dashboard: IDashboardState
}
