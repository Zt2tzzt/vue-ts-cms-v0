<template>
	<div class="role">
		<page-search :search-form-config="searchFormConfig" />
		<page-content
			:content-table-config="contentTableConfig"
			:pageName="pageName"
			new-btn-label="新建角色"
			@newBtnClick="(handleNewBtnClick as any)"
			@editBtnClick="(handlEeditBtnClick as any)"
		/>
		<page-model
			ref="pageModelRef"
			:model-form-config="modelFormConfig"
			:page-name="pageName"
			title="新建角色"
			:defaultInfo="defaultInfo"
			:other-info="otherInfo"
		>
			<div class="menu-tree">
				<el-tree
					ref="elTreeRef"
					:data="menus"
					show-checkbox
					node-key="id"
					:props="{ children: 'children', label: 'name' }"
					@check="handleElthreeCheckChange"
				/>
			</div>
		</page-model>
	</div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import PageModel from '@/components/page-model/src/PageModel.vue'

import { contentTableConfig } from './config/contentTableConfig'
import { searchFormConfig } from './config/searchFormConfig'
import { modelFormConfig } from './config/modelFormConfig'

import usePageModel from '@/hooks/usePageModel'
import { useStore } from '@/store'
import { computed, nextTick, ref } from 'vue'
import { menuMapLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

// 处理page-model的hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (row: any) => {
	const leafKeys = menuMapLeafKeys(row.menuList)
	nextTick(() => {
		elTreeRef.value?.setCheckedKeys(leafKeys)
	})
}
const pageName = 'role'
const [pageModelRef, handleNewBtnClick, handlEeditBtnClick, defaultInfo] = usePageModel(
	undefined,
	editCallback
)

const store = useStore()
const menus = computed(() => store.state.entireMenu)

const otherInfo = ref({})
const handleElthreeCheckChange = (data1: any, data2: any) => {
	const checkedKeys = data2.checkedKeys
	const halfCheckedKeys = data2.halfCheckedKeys
	const menuList = [...checkedKeys, ...halfCheckedKeys]
	otherInfo.value = { menuList }
}
</script>

<style scoped lang="less">
.menu-tree {
	margin-left: 25px;
}
</style>
