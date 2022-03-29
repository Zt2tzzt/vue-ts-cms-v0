<template>
	<div class="zt-table">
		<!-- 页面上方 -->
		<div class="header">
			<slot name="header">
				<div class="title">{{ title }}</div>
				<div class="handler">
					<slot name="headerHandle"></slot>
				</div>
			</slot>
		</div>
		<!-- 页面内容 -->
		<el-table
			:data="listData"
			border
			style="width: 100%"
			@selection-change="handleSelectChange"
			row-key="id"
			:tree-props="{ children: 'children' }"
			v-bind="childrenProps"
		>
			<!-- 选中列，type=“select”代表这一列为选中列 -->
			<el-table-column v-if="showSelectColumn" type="selection" align="center" width="60" />
			<!-- 序号列，type="index"代表这一列为序号' -->
			<el-table-column v-if="showTableIndex" type="index" label="序号" align="center" width="60" />
			<template v-for="option of propList" :key="option.prop">
				<!-- show-overflow-tooltip内容过长时隐藏 -->
				<el-table-column v-bind="option" align="center" show-overflow-tooltip>
					<!-- 使用el-table-column的默认插槽，传入要展示的内容，作用域插槽会传回每一行的数据，通过scope.row获取这一行中那一列的数据 -->
					<template v-slot="scope">
						<!-- 声明具名插槽 -->
						<slot :name="option.slotName" :row="scope.row">
							<!-- 使用默认插槽，用于需要展示的形式 -->
							{{ option.prop ? scope.row[option.prop] : '' }}
						</slot>
					</template>
				</el-table-column>
			</template>
		</el-table>
		<!-- 页面下方 -->
		<div class="footer" v-if="showFooter">
			<slot name="footer">
				<div class="demo-pagination-block">
					<el-pagination
						:page-sizes="[10, 20, 30]"
						:page-size="page.pageSize"
						:current-page="page.currentPage"
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						layout="total, sizes, prev, pager, next, jumper"
						:total="listCount"
					/>
				</div>
				<!--
						:small="small"
						:disabled="disabled"
						:background="background" -->
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'
import type { ITableProp, IPageInfo } from '@/base-ui/table'
import { ITableChildrenProps } from '../type'

interface IProps {
	title?: string
	listData: any[]
	listCount: number
	propList: ITableProp[]
	showTableIndex?: boolean
	showSelectColumn?: boolean
	page?: IPageInfo
	childrenProps?: ITableChildrenProps
	showFooter?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
	title: '',
	listCount: 0,
	showTableIndex: false,
	showSelectColumn: false,
	page: () => ({ currentPage: 1, pageSize: 10 }),
	showFooter: true
})
const emits = defineEmits<{
	(e: 'selectChange', selections: any[]): void
	(e: 'update:page', page: IPageInfo): void
}>()
// const emits = defineEmits(['selectChange', 'update:page'])

// 监听table中的行选中事件。
const handleSelectChange = (selections: any[]) => {
	emits('selectChange', selections)
}
// 监听pageSize改变的事件
const handleSizeChange = (pageSize: number) => {
	console.log('---pagesize change---', pageSize)
	emits('update:page', { ...props.page, pageSize })
}
// 监听currentPage改变的事件。
const handleCurrentChange = (currentPage: number) => {
	emits('update:page', { ...props.page, currentPage })
}
</script>

<style scoped lang="less">
.header {
	display: flex;
	height: 45px;
	padding: 0 5px;
	justify-content: space-between;
	align-items: center;

	.title {
		font-size: 20px;
		font-weight: 700;
	}

	.handler {
		align-items: center;
	}
}

.footer {
	margin-top: 15px;

	.el-pagination {
		text-align: right;
	}
}
</style>
