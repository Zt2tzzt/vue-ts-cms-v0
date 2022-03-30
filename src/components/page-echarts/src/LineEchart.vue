<template>
	<div class="line-echart">
		<BaseEcharts :options="options" />
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, ComputedRef, withDefaults } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseEcharts from '@/base-ui/base-echarts'

const props = withDefaults(
	defineProps<{
		title?: string
		xlabels: string[]
		values: number[]
	}>(),
	{
		title: '堆叠区域图'
	}
)

const options: ComputedRef<EChartsOption> = computed(() => {
	return {
		title: {
			text: props.title
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		/* legend: {
			data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
		}, */
		/* toolbox: {
			feature: {
				saveAsImage: {}
			}
		}, */
		grid: {
			left: '3%', // 距离左边
			right: '4%', // 距离右边
			bottom: '3%', // 距离底部
			containLabel: true // 是否包含文本
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: props.xlabels
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '分类销量',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				emphasis: {
					focus: 'series'
				},
				data: props.values
			}
		]
	}
})
</script>

<style scoped lang="less"></style>
