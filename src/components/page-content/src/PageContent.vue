<template>
	<div class="page-content">
		<zt-table
			:listData="dataList"
			:listCount="dataCount"
			@selectChange="handleSelectChange"
			v-model:pageInfo="pageInfo"
			v-bind="contentTableConfig"
		>
			<!-- 使用header插槽 -->
			<template #headerHandle>
				<!-- 新建按钮 -->
				<el-button type="primary" size="default" v-if="isCreate" @click="handleNewBtnClick">
					{{ newBtnLabel }}
				</el-button>
			</template>
			<!-- 列中共有的插槽 -->
			<!-- 开始时间列 -->
			<template #startTime="scope">
				<span>{{ formatUtcString(scope.row.createAt) }}</span>
			</template>
			<!-- 更新时间列 -->
			<template #updateTime="scope">
				<span>{{ formatUtcString(scope.row.updateAt) }}</span>
			</template>
			<!-- 操作（删，改）列 -->
			<template #handler="scope">
				<el-button
					:icon="Edit"
					size="small"
					type="text"
					v-if="isUpdate"
					@click="handleEditBtnClick(scope.row)"
					>编辑</el-button
				>
				<el-button
					:icon="Delete"
					size="small"
					type="text"
					v-if="isDelete"
					@click="handleDleteBtnClick(scope.row)"
					>删除</el-button
				>
			</template>
			<!-- 动态生成插槽 -->
			<template v-for="item in (otherPropSlots as any)" :key="item.prop" #[item.slotName]="scope">
				<slot :name="item.slotName" :row="scope.row" />
			</template>
			<!-- 使用footer插槽 -->
			<!-- <template #footer></template> -->
		</zt-table>
	</div>
</template>

<script setup lang="ts">
import ZtTable from '@/base-ui/table'
import { Delete, Edit } from '@element-plus/icons-vue'
import { defineProps, defineEmits, defineExpose, ref, watch } from 'vue'
import type { IContentTable } from '@/base-ui/table'
import { useStore } from '@/store'
import { computed } from 'vue'
import usePermission from '@/hooks/usePermission'
import formatUtcString from '@/utils/date-format'

interface IProps {
	contentTableConfig: IContentTable
	newBtnLabel: string
	pageName: string
}
const props = defineProps<IProps>()
const emits = defineEmits<{
	(e: 'newBtnClick'): void
	(e: 'editBtnClick', row: any): void
}>()

// 0.获取操作权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

const store = useStore()
// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => getPageData())

// 2.请求数据
const getPageData = (queryInfo: any = {}) => {
	if (!isQuery) return
	// 请求页面页面数据，在actions中使用async，await，使代码运行同步的
	store.dispatch('system/getPageListAction', {
		// 请求路径
		pageName: props.pageName,
		// 查询条件
		queryInfo: {
			offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
			size: pageInfo.value.pageSize,
			...queryInfo
		}
	})
}
getPageData()

// store中拿到datalist和dataCount
const dataList = computed(() => store.getters['system/pageListData'](props.pageName))
const dataCount = computed(() => store.getters['system/pageListCount'](props.pageName))

// 处理行选中事件
const handleSelectChange = (selections: any[]) => {
	console.log('---selections---', selections)
}

// 获取其他的动态插槽名称
const certainSlots = ['startTime', 'updateTime', 'handler'] // 确定在page-content中公共使用的插槽
const otherPropSlots = props.contentTableConfig.propList.filter(item => {
	// 过滤没有slotName的，和slotName存在于确定插槽的item
	return item.slotName && !certainSlots.includes(item.slotName)
})

// 删除按钮点击
const handleDleteBtnClick = (row: any) => {
	store.dispatch('system/deletePageDataAction', {
		pageName: props.pageName,
		id: row.id
	})
}
// 新建按钮点击
const handleNewBtnClick = () => {
	emits('newBtnClick')
}
// 编辑按钮点击
const handleEditBtnClick = (row: any) => {
	emits('editBtnClick', row)
}

defineExpose({ getPageData })
</script>

<style scoped lang="less">
.page-content {
	padding: 20px;
	border-top: 20px solid #f5f5f5;
}
</style>
