import ztRequest from '@/service'
import { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
	ACCOUNTLOGIN = '/login',
	LOGINUSERINFO = '/users/',
	USERMENUS = '/role/'
}

export function accountLoginRequest(account: IAccount) {
	return ztRequest.post<IDataType<ILoginResult>>({
		url: LoginApi.ACCOUNTLOGIN,
		data: account
	})
}

export function requestUserInfoById(id: number) {
	return ztRequest.get<IDataType>({
		url: LoginApi.LOGINUSERINFO + id
	})
}

export function requestUserMenuByRoleId(id: number) {
	return ztRequest.get<IDataType>({
		url: LoginApi.USERMENUS + id + '/menu'
	})
}
