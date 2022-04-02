import { IGoodsAddressSale } from '@/store/main/analysis/type'
import { coordinateData } from './coordinate-data'

export const convertData = function (data: IGoodsAddressSale[]) {
	const formatData: { name: string; value: number }[] = []
	data.forEach(item => {
		const geoCoord = coordinateData[item.address]
		if (geoCoord) {
			formatData.push({
				name: item.address,
				value: geoCoord.concat(item.count)
			})
		}
	})
	return formatData
}
