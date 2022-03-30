<template>
	<div class="rose-echart">
		<BaseEcharts :options="options" />
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, ComputedRef } from 'vue'
import type { EChartsOption } from 'echarts'
import { IPieData } from '../type'
import BaseEcharts from '@/base-ui/base-echarts/src/BaseEcharts.vue'

const props = defineProps<{
	roseData: IPieData[]
}>()

const options: ComputedRef<EChartsOption> = computed(() => {
	return {
		// legend: {
		// 	top: 'bottom'
		// },
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		series: [
			{
				name: 'Nightingale Chart',
				type: 'pie',
				radius: [10, 100],
				center: ['50%', '50%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 8
				},
				data: props.roseData
			}
		]
	}
})
</script>

<style scoped lang="less"></style>
