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
	userList: IUserList[]
	userCount: number
}
