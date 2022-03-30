import { IDataType } from './../../login/type'
import ztRequest from '@/service'
enum DashboardAPI {
	CategoryGoodsCount = '/goods/category/count',
	CategoryGoodsSale = '/goods/category/sale',
	CategoryGoodsFavor = '/goods/category/favor',
	AddressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
	return ztRequest.get<IDataType>({
		url: DashboardAPI.CategoryGoodsCount
	})
}

export function getCategoryGoodsSale() {
	return ztRequest.get<IDataType>({
		url: DashboardAPI.CategoryGoodsSale
	})
}

export function getCategoryGoodsFavor() {
	return ztRequest.get<IDataType>({
		url: DashboardAPI.CategoryGoodsFavor
	})
}

export function getAddressGoodsSale() {
	return ztRequest.get<IDataType>({
		url: DashboardAPI.AddressGoodsSale
	})
}
