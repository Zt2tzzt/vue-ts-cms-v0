import { IGoodsAddressSale } from '@/store/main/analysis/type'
import { coordinateData } from './coordinate-data'

export const convertData = function (data: IGoodsAddressSale[]) {
	const res: { name: string; value: number }[] = []
	data.forEach(item => {
		const geoCoord = coordinateData[item.address]
		if (geoCoord) {
			res.push({
				name: item.address,
				value: geoCoord.concat(item.count)
			})
		}
	})
	return res
}
