<template>
	<div class="user">
		<div class="search">
			<zt-form v-bind="searchFormConfig" v-model="formData" />
		</div>
	</div>
</template>

<script setup lang="ts">
import ZtForm from '@/base-ui/form'
import { ref } from 'vue'
import { searchFormConfig } from './config/searchFormConfig'

const formData = ref({
	name: '',
	password: '',
	sport: '',
	createTime: ''
})
</script>

<style scoped lang="less"></style>
