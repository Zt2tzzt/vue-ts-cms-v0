import { IDataType } from '@/service/login/type'
import ztRequest from '@/service'
import { IUserResponse } from '@/store/main/system/type'

/**
 * @description: 此函数用于，请求user中的主数据
 * @Author: ZeT1an
 * @param {string} url 请求url
 * @param {IUserPageListDataParam} queryInfo 请求的参数
 * @return {UserInfo} 返回请求到的用户对象
 */
export function getPageListData(url: string, queryInfo: any) {
	return ztRequest.post<IUserResponse>({
		url,
		data: queryInfo
	})
}

/**
 * @description: 此函数用于，发送删除数据的请求
 * @Author: ZeT1an
 * @param {string} url 请求url，类似于/user/id
 * @return {*}
 */
export function deletePageData(url: string) {
	return ztRequest.delete<IDataType>({
		url
	})
}

export function createPageData(url: string, newData: any) {
	return ztRequest.post<IDataType>({
		url,
		data: newData
	})
}

export function editPageData(url: string, editData: any) {
	return ztRequest.patch<IDataType>({
		url,
		data: editData
	})
}
