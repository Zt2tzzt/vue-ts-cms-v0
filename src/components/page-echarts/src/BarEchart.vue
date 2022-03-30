<template>
	<div class="line-echart">
		<BaseEcharts :options="options" />
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, ComputedRef, withDefaults } from 'vue'
import type { EChartsOption } from 'echarts'
import BaseEcharts from '@/base-ui/base-echarts/src/BaseEcharts.vue'
import * as echarts from 'echarts'

const props = withDefaults(
	defineProps<{
		title?: string
		xlabels: string[]
		values: number[]
	}>(),
	{
		title: '堆叠收藏图'
	}
)

const options: ComputedRef<EChartsOption> = computed(() => {
	return {
		title: {
			text: props.title,
			subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
		},
		xAxis: {
			data: props.xlabels,
			axisLabel: {
				inside: true,
				color: '#fff'
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			z: 10
		},
		yAxis: {
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#999'
			}
		},
		dataZoom: [
			{
				type: 'inside'
			}
		],
		series: [
			{
				type: 'bar',
				showBackground: true,
				itemStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{ offset: 0, color: '#83bff6' },
						{ offset: 0.5, color: '#188df0' },
						{ offset: 1, color: '#188df0' }
					])
				},
				emphasis: {
					itemStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{ offset: 0, color: '#2378f7' },
							{ offset: 0.7, color: '#2378f7' },
							{ offset: 1, color: '#83bff6' }
						])
					}
				},
				data: props.values
			}
		]
	}
})
</script>

<style scoped lang="less"></style>
