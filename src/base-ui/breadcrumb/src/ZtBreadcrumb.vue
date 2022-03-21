<template>
	<div class="breadcrumb">
		<el-breadcrumb separator="/">
			<template v-for="bc of breadcrumbs" :key="bc.name">
				<el-breadcrumb-item :to="bc.path ? { path: bc.path } : ''">{{ bc.name }}</el-breadcrumb-item>
			</template>
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from '@/base-ui/breadcrumb'
import { defineProps } from 'vue'

// 面包屑
interface IProps {
	breadcrumbs: IBreadcrumb[]
}
defineProps<IProps>()
</script>

<style scoped lang="less"></style>
