export interface IGoodsCount {
	id: number
	name: string
	goodsCount: number
}
export interface IGoodsFavor {
	id: number
	name: string
	goodsFavor: number
}

export interface IGoodsAddressSale {
	address: string
	count: number
}

export interface IDashboardState {
	categgoryGoodsCount: IGoodsCount[]
	categgoryGoodsSale: IGoodsCount[]
	categgoryGoodsFavor: IGoodsFavor[]
	addressGoodsSale: IGoodsAddressSale[]
}
