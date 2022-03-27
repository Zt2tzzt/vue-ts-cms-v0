<template>
	<div class="breadcrumb">
		<el-breadcrumb separator="/">
			<template v-for="bc of breadcrumbs" :key="bc.name">
				<el-breadcrumb-item :to="bc.path ? { path: bc.path } : ''">{{
					bc.name
				}}</el-breadcrumb-item>
			</template>
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from '@/base-ui/breadcrumb'
import { defineProps, PropType } from 'vue'

// 面包屑
defineProps({
	breadcrumbs: {
		type: Array as PropType<IBreadcrumb[]>,
		required: true
	}
})
</script>

<style scoped lang="less"></style>
