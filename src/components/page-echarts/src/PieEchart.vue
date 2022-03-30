<template>
	<div class="pie-echart">
		<base-echarts :options="options" />
	</div>
</template>

<script setup lang="ts">
import BaseEcharts from '@/base-ui/base-echarts'
import type { EChartsOption } from 'echarts'
import { computed, ComputedRef, defineProps } from 'vue'
import type { IPieData } from '../type'

const props = defineProps<{
	pieData: IPieData[]
}>()

const options: ComputedRef<EChartsOption> = computed(() => {
	return {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'horizontal',
			left: 'left'
		},
		series: [
			{
				name: '分类数据',
				type: 'pie',
				radius: '50%',
				data: props.pieData,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	}
})
</script>

<style scoped lang="less"></style>
