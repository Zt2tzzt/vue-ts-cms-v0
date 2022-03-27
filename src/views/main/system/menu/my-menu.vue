<template>
	<div class="menu">
		<page-content :contentTableConfig="contentTableConfig" page-name="menu"></page-content>
	</div>
</template>

<script setup lang="ts">
import PageContent from '@/base-ui/page-content/src/PageContent.vue'
import { contentTableConfig } from './config/contentTableConfig'
</script>

<style scoped></style>
