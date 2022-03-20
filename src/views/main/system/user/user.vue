<template>
	<div class="user">
		<div class="search">
			<zt-form v-bind="searchFormConfig" />
		</div>
	</div>
</template>

<script setup lang="ts">
import ZtForm from '@/base-ui/form'
import { searchFormConfig } from './config/searchFormConfig'
</script>

<style scoped lang="less"></style>
