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
