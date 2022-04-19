import { IGoodsAddressSale } from '@/store/main/analysis/type'
import { coordinateData } from './coordinate-data'

/**
 * @description: 此函数用于，转换请求到的地区销售数据，使之成为符合option.series.data的数据格式。
 * @Author: ZeT1an
 * @param {IGoodsAddressSale} data 请求到的地区销售数据。
 * @return {*} 转换后的数据。
 */
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
