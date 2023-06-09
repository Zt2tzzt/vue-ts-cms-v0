<template>
	<div class="line-echart">
		<BaseEcharts :options="options" />
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, ComputedRef, withDefaults } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseEcharts from '@/base-ui/base-echarts/src/BaseEcharts.vue'
import { convertData } from '../utils/convert-data'
import type { IGoodsAddressSale } from '@/store/main/analysis/type'

const props = withDefaults(
	defineProps<{
		title?: string
		mapData: IGoodsAddressSale[]
	}>(),
	{
		title: '堆叠区域图'
	}
)

const options: ComputedRef<EChartsOption> = computed(() => {
	return {
		backgroundColor: '#fff',
		title: {
			text: '全国销量统计',
			left: 'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: function (params: any) {
				return params.name + ' : ' + params.value[2]
			}
		},
		visualMap: {
			min: 0,
			max: 60000,
			left: 20,
			bottom: 20,
			calculable: true,
			text: ['高', '低'],
			inRange: {
				color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
			},
			textStyle: {
				color: '#fff'
			}
		},
		// 经纬度
		geo: {
			map: 'china',
			roam: 'scale',
			emphasis: {
				areaColor: '#f4cccc',
				borderColor: 'rgb(9, 54, 95)',
				itemStyle: {
					areaColor: '#f4cccc'
				}
			}
		},
		series: [
			{
				name: '销量',
				type: 'scatter',
				// 坐标系统，相对于geo
				coordinateSystem: 'geo',
				data: convertData(props.mapData),
				symbolSize: 12,
				emphasis: {
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 1
					}
				}
			},
			{
				type: 'map',
				map: 'china',
				geoIndex: 0,
				aspectScale: 0.75,
				tooltip: {
					show: false
				}
			}
		]
	}
})
</script>

<style scoped lang="less"></style>
