export interface IUserList {
	id: number
	name: string
	realname: string
	cellphone: number
	enable: number
	departmentId: number
	roleId: number
	createAt: Date
	updateAt: Date
}

export interface IUserData {
	list: IUserList[]
	totalCount: number
}

export interface IUserResponse {
	code: number
	data: IUserData
}

export interface ISystemState {
	usersList: IUserList[]
	usersCount: number
	roleList: any[]
	roleCount: number
	goodsList: any[]
	goodsCount: number
	menuList: any[]
	menuCount: number
}

export interface IRoleData {
	list: any[]
	totalCount: number
}
