<template>
	<div class="menu">
		<page-content
			:contentTableConfig="contentTableConfig"
			page-name="menu"
			:new-btn-label="newBtnLabel"
		/>
	</div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/src/PageContent.vue'
import { contentTableConfig } from './config/contentTableConfig'

const newBtnLabel = '新建菜单'
</script>

<style scoped></style>
