<template>
	<div class="page-content">
		<zt-table
			:listData="dataList"
			:listCount="dataCount"
			@selectChange="handleSelectChange"
			v-bind="contentTableConfig"
			v-model:page="pageInfo"
		>
			<!-- header中的插槽 -->
			<template #headerHandle>
				<el-button type="primary" size="default" v-if="isCreate">新建用户</el-button>
			</template>
			<!-- 列中共有的插槽 -->
			<!-- 开始时间列 -->
			<template #startTime="scope">
				<span>{{ $filters.formatTime(scope.row.createAt) }}</span>
			</template>
			<!-- 更新时间列 -->
			<template #updateTime="scope">
				<span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
			</template>
			<!-- 操作（删，改）列 -->
			<template #handler>
				<el-button :icon="Edit" size="small" type="text" v-if="isUpdate">编辑</el-button>
				<el-button :icon="Delete" size="small" type="text" v-if="isDelete">删除</el-button>
			</template>
			<!-- 动态生成插槽 -->
			<template v-for="item in (otherPropSlots as any)" :key="item.prop" #[item.slotName]="scope">
				<slot :name="item.slotName" :row="scope.row" />
			</template>
			<!-- footer中的插槽 -->
			<template #footer></template>
		</zt-table>
	</div>
</template>

<script setup lang="ts">
import ZtTable from '@/base-ui/table'
import { Delete, Edit } from '@element-plus/icons-vue'
import { defineProps, defineExpose, ref, watch } from 'vue'
import type { IContentTable } from '@/base-ui/table'
import { useStore } from '@/store'
import { computed } from 'vue'
import usePermission from '@/hooks/usePermission'

interface IProps {
	contentTableConfig: IContentTable
	pageName: string
}
const props = defineProps<IProps>()

// 0.获取操作权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

const store = useStore()
// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
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
			offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
			size: pageInfo.value.pageSize,
			...queryInfo
		}
	})
}
getPageData()

// store中拿到datalist和dataCount
const dataList = computed(() => store.getters['system/pageListData'](props.pageName))
const dataCount = computed(() => store.getters['system/pageListCount'](props.pageName))

// 处理选中改变的事件
const handleSelectChange = (selections: any[]) => {
	console.log('---selections---', selections)
}

// 获取其他的动态插槽名称
const certainSlots = ['startTime', 'updateTime', 'handler'] // 确定在page-content中公共使用的插槽
const otherPropSlots = props.contentTableConfig.propList.filter(item => {
	// 过滤没有slotName的，和slotName存在于确定插槽的item
	return !item.slotName || certainSlots.includes(item.slotName) ? false : true
})

defineExpose({ getPageData })
</script>

<style scoped lang="less">
.page-content {
	padding: 20px;
	border-top: 20px solid #f5f5f5;
}
</style>
