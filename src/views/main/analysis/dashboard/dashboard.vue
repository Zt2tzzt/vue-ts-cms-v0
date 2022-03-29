<template>
	<div class="dashboard">
		<div class="div-ref" ref="divRef" style="width: 500px; height: 500px"></div>
	</div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const divRef = ref<HTMLElement>()
onMounted(() => {
	// 1.初始化ECharts实例, echarts.init(dom, theme, options
	const echartInstance = echarts.init(divRef.value!, 'light', { renderer: 'svg' })
	// 2.编写配置文件
	const option = {
		title: {
			text: 'ECharts 入门示例',
			subtext: '哈哈哈哈'
		},
		// 鼠标放在图表上的显示效果
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		// legend会更具series中的name自动提取。
		legend: {
			data: ['销量']
		},
		xAxis: {
			data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
		},
		// y轴刻度，根据实际数据显示。
		yAxis: {},
		series: [
			{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}
		]
	}
	// 3.设置配置，并且开始绘制。
	echartInstance.setOption(option)
})
</script>

<style scoped></style>
