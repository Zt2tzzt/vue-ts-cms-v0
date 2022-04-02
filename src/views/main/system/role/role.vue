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

const elTreeRef = ref<InstanceType<typeof ElTree>>()
// 处理page-model的hook，点击编辑按钮时触发，给el-tree设置选中的叶子节点。
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
// 拿到menu的数据，设置给el-tree
const store = useStore()
const menus = computed(() => store.state.entireMenu)
// otherInfo用于绑定el-tree中选中的节点
const otherInfo = ref({})
// data1代表所有的节点，data2代表选中的节点。
const handleElthreeCheckChange = (data1: any, data2: any) => {
	const checkedKeys = data2.checkedKeys // 选中的叶子节点
	const halfCheckedKeys = data2.halfCheckedKeys // 半选中的节点。
	const menuList = [...checkedKeys, ...halfCheckedKeys]
	otherInfo.value = { menuList }
}
</script>

<style scoped lang="less">
.menu-tree {
	margin-left: 25px;
}
</style>
