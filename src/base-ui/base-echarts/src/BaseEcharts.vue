<template>
	<div class="base-echarts">
		<div class="echartDivRef" ref="echartDivRef" :style="{ width, height }" />
	</div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, onMounted, ref, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

const props = withDefaults(
	defineProps<{
		width?: string
		height?: string
		options: EChartsOption
	}>(),
	{
		width: '100%',
		height: '360px'
	}
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
	const { setOptions } = useEchart(echartDivRef.value!)
	// 对options的变化做监听。
	watchEffect(() => {
		setOptions(props.options)
	})
})
</script>

<style scoped lang="less"></style>
