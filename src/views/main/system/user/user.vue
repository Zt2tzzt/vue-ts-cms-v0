<template>
	<div class="user">
		<page-search :searchFormConfig="searchFormConfig" />
		<div class="content">
			<zt-table :listData="userList" :propList="propList">
				<template #status="scope">
					<el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
				</template>
				<template #startTime="scope">
					{{ scope.row.createAt }}
				</template>
				<template #updateTime="scope">
					{{ scope.row.updateAt }}
				</template>
			</zt-table>
		</div>
	</div>
</template>

<script setup lang="ts">
import PageSearch from '@/base-ui/page-search'
import { useStore } from '@/store'
import { computed } from 'vue'
import { searchFormConfig } from './config/searchFormConfig'
import ZtTable from '@/base-ui/table'
import type { ITableProp } from '@/base-ui/table'

const store = useStore()
// 请求页面user页面数据，在actions中使用async，await，是代码编程同步的
store.dispatch('system/getPageListAction', {
	// 页面路径
	pageUrl: '/users/list',
	// 查询条件
	querInfo: {
		offset: 0,
		size: 10
	}
})
const userList = computed(() => store.state.system.userList)
// const userCount = computed(() => store.state.system.userCount)
// 为el-tab写配置
const propList: ITableProp[] = [
	// prop: 对应数组中对象的key，min-width意为最小宽度
	{ prop: 'name', label: '用户名', minWidth: '100' },
	{ prop: 'realname', label: '真实姓名', minWidth: '100' },
	{ prop: 'cellphone', label: '手机号', minWidth: '100' },
	{ prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
	{ prop: 'departmentId', label: '部门', minWidth: '100' },
	{ prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'startTime' },
	{ prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' }
]
</script>

<style scoped lang="less">
.content {
	padding: 20px;
	border-top: 20px solid #f5f5f5;
}
</style>
