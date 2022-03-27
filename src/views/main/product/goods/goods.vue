<template>
	<div class="goods">
		<page-content :contentTableConfig="contentTableConfig" page-name="goods">
			<!-- 状态列 -->
			<template #status="scope">
				<el-button size="small" plain :type="scope.row.status ? 'success' : 'danger'">
					{{ scope.row.status ? '启用' : '禁用' }}
				</el-button>
			</template>
			<!-- 图片-->
			<template #imgUrl="scope">
				<el-image
					style="width: 60px; height: 60px"
					:src="scope.row.imgUrl"
					:preview-src-list="[scope.row.imgUrl]"
					fit="cover"
					preview-teleported
				/>
			</template>
			<template #oldPrice="scope">
				{{ '￥' + scope.row.oldPrice }}
			</template>
			<template #newPrice="scope">
				{{ '￥' + scope.row.newPrice }}
			</template>
		</page-content>
	</div>
</template>

<script setup lang="ts">
import PageContent from '@/base-ui/page-content/src/PageContent.vue'
import { contentTableConfig } from './config/contentTableConfig'
</script>

<style scoped></style>
