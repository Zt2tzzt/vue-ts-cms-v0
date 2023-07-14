import * as echarts from 'echarts'
import chinaMapData from '@/base-ui/base-echarts/data/china.json'

echarts.registerMap('china', chinaMapData) // 注册中国地图
export default function (el: HTMLElement) {
	// 1.初始化ECharts实例, echarts.init(dom, theme, options
	const echartInstance = echarts.init(el, 'light', { renderer: 'svg' })

	// 2.编写配置文件，设置配置，并且开始绘制。
	const setOptions = (options: echarts.EChartsOption) => {
		echartInstance.setOption(options)
	}

	// 根据页面缩放实时的调整图标大小。
	window.addEventListener('resize', () => {
		echartInstance.resize()
	})

	// 该函数，用于导出，在某些情况下（如菜单展开按钮），主动调用实例的resize方法。
	const updateSize = () => {
		echartInstance.resize()
	}

	// 导出不用元组，因为有时只会使用导出对象中的某一个属性
	return { echartInstance, setOptions, updateSize }
}
