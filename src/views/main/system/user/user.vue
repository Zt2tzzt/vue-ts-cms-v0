<template>
	<div class="user">
		<page-search
			:searchFormConfig="searchFormConfig"
			@resetBtnClick="(handleResetBtnClick as any)"
			@queryBtnClick="(handleQueryBtnClick as any)"
		/>
		<page-content :contentTableConfig="contentTableConfig" pageName="users" ref="pageContentRef">
			<!-- 状态列 -->
			<template #status="scope">
				<el-button size="small" plain :type="scope.row.enable ? 'success' : 'danger'">
					{{ scope.row.enable ? '启用' : '禁用' }}
				</el-button>
			</template>
		</page-content>
	</div>
</template>

<script setup lang="ts">
import PageSearch from '@/base-ui/page-search'
import PageContent from '@/base-ui/page-content/src/PageContent.vue'

import { searchFormConfig } from './config/searchFormConfig'
import { contentTableConfig } from './config/contentTableConfig'

import usePageSearch from '@/hooks/usePageSearch'

const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] = usePageSearch()
</script>

<style scoped lang="less">
.demo-pagination-block + .demo-pagination-block {
	margin-top: 10px;
}
.demo-pagination-block .demonstration {
	margin-bottom: 16px;
}
</style>
