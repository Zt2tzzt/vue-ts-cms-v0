<template>
	<div class="user">
		<page-search
			:searchFormConfig="searchFormConfig"
			@resetBtnClick="(handleResetBtnClick as any)"
			@queryBtnClick="(handleQueryBtnClick as any)"
		/>
		<page-content
			:contentTableConfig="contentTableConfig"
			:newBtnLabel="newBtnLabel"
			pageName="users"
			ref="pageContentRef"
			@newBtnClick="(handleNewBtnClick as any)"
			@editBtnClick="(handlEeditBtnClick as any)"
		>
			<!-- 状态列 -->
			<template #status="scope">
				<el-button size="small" plain :type="scope.row.enable ? 'success' : 'danger'">
					{{ scope.row.enable ? '启用' : '禁用' }}
				</el-button>
			</template>
		</page-content>
		<page-model
			ref="pageModelRef"
			:title="pageModelTitle"
			:modelFormConfig="modelFormConfigRef"
			:defaultInfo="defaultInfo"
			pageName="users"
		/>
	</div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModel from '@/components/page-model'

import { searchFormConfig } from './config/searchFormConfig'
import { contentTableConfig } from './config/contentTableConfig'
import { modelFormConfig } from './config/modelFormConfig'

import usePageSearch from '@/hooks/usePageSearch'
import usePageModel from '@/hooks/usePageModel'
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const newBtnLabel = '新建用户'
const pageModelTitle = ref(newBtnLabel)
// 1.新建/编辑时，执行回调函数，操作password输入框是否需要隐藏。
const newCallback = () => {
	pageModelTitle.value = '新建用户'
	const passwordItem = modelFormConfig.formItems.find(item => item.field === 'password')
	passwordItem!.isHidden = false
}
const editCallback = () => {
	pageModelTitle.value = '编辑用户'
	const passwordItem = modelFormConfig.formItems.find(item => item.field === 'password')
	passwordItem!.isHidden = true
}

// 2.动态添加部门和角色列表
const store = useStore()
const modelFormConfigRef = computed(() => {
	const departmentItem = modelFormConfig.formItems.find(item => item.field === 'departmentId')
	departmentItem!.options = store.state.entireDepartment.map(item => ({
		title: item.name,
		value: item.id
	}))
	const roleItem = modelFormConfig.formItems.find(item => item.field === 'roleId')
	roleItem!.options = store.state.entireRole.map(item => ({
		title: item.name,
		value: item.id
	}))
	return modelFormConfig
})

// 3.调用hook，获取公共的变量和函数。
const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] = usePageSearch()
const [pageModelRef, handleNewBtnClick, handlEeditBtnClick, defaultInfo] = usePageModel(
	newCallback,
	editCallback
)
</script>

<style scoped lang="less">
.demo-pagination-block + .demo-pagination-block {
	margin-top: 10px;
}
.demo-pagination-block .demonstration {
	margin-bottom: 16px;
}
</style>
