<template>
	<div class="dashboard">
		<!-- 第一行图表 -->
		<el-row :gutter="10">
			<el-col :span="7">
				<zt-card title="分类商品销量（饼图）">
					<pie-echart :pie-data="categgoryGoodsData" />
				</zt-card>
			</el-col>
			<el-col :span="10">
				<zt-card title="不同城市商品销量">
					<MapEchart :map-data="addressGoodsCountData" />
				</zt-card>
			</el-col>
			<el-col :span="7">
				<zt-card title="分类商品销量（玫瑰图）">
					<rose-echart :rose-data="categgoryGoodsData" />
				</zt-card>
			</el-col>
		</el-row>
		<!-- 第二行图表 -->
		<el-row :gutter="10" class="content-row">
			<el-col :span="12">
				<zt-card title="分类商品销量">
					<LineEchart v-bind="categoryGoodsSaleData" />
				</zt-card>
			</el-col>
			<el-col :span="12">
				<zt-card title="分类商品的收藏数量">
					<BarEchart v-bind="categoryGoodsFavorData" />
				</zt-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import ZtCard from '@/base-ui/card'
import { PieEchart } from '@/components/page-echarts'
import { computed } from 'vue'
import { RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'

const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')

// 获取数据
const categgoryGoodsData = computed(() => {
	return store.state.dashboard.categgoryGoodsCount.map(item => {
		return { name: item.name, value: item.goodsCount }
	})
})
// 获取商品销量数据
const categoryGoodsSaleData = computed(() => {
	const xlabels: string[] = []
	const values: number[] = []
	const saleData = store.state.dashboard.categgoryGoodsSale
	saleData.forEach(item => {
		xlabels.push(item.name)
		values.push(item.goodsCount)
	})
	return { xlabels, values }
})
// 获取商品收藏数据
const categoryGoodsFavorData = computed(() => {
	const xlabels: string[] = []
	const values: number[] = []
	const favorData = store.state.dashboard.categgoryGoodsFavor
	favorData.forEach(item => {
		xlabels.push(item.name)
		values.push(item.goodsFavor)
	})
	return { xlabels, values }
})
// 获取商品地区销量数据
const addressGoodsCountData = computed(() => store.state.dashboard.addressGoodsSale)
</script>

<style lang="less" scoped>
.dashboard {
	background-color: #f5f5f5;
}
.content-row {
	margin-top: 20px;
}
</style>
