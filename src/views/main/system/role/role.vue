<template>
	<div class="role">
		<page-search :search-form-config="searchFormConfig" />
		<page-content :content-table-config="contentTableConfig" :pageName="pageName" />
	</div>
</template>

<script setup lang="ts">
import PageContent from '@/base-ui/page-content/src/PageContent.vue'
import PageSearch from '@/base-ui/page-search/src/PageSearch.vue'
import { contentTableConfig } from './config/contentTableConfig'
import { searchFormConfig } from './config/searchFormConfig'

const pageName = 'role'
</script>

<style scoped></style>
