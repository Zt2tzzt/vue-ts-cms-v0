<template>
	<div class="nav-header">
		<el-icon class="fold-menu-icon" :size="30" @click="handleFoldClick">
			<expand v-show="isFold" />
			<fold v-show="!isFold" />
		</el-icon>
		<div class="content">
			<div>面包屑</div>
			<user-info />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'
import UserInfo from './cpms/UserInfo.vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false) // 是否展开菜单
const handleFoldClick = () => {
	isFold.value = !isFold.value
	emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
	display: flex;
	width: 100%;
	.fold-menu-icon {
		cursor: pointer;
	}
	.content {
		flex: 1;
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
