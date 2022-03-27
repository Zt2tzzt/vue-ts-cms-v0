<template>
	<div class="role">
		<page-search :search-form-config="searchFormConfig" />
		<page-content
			:content-table-config="contentTableConfig"
			:pageName="pageName"
			:new-btn-label="newBtnLabel"
		/>
	</div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import { contentTableConfig } from './config/contentTableConfig'
import { searchFormConfig } from './config/searchFormConfig'

const newBtnLabel = '新建角色'
const pageName = 'role'
</script>

<style scoped></style>
