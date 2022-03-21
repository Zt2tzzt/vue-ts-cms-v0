<template>
	<div class="nav-header">
		<el-icon class="fold-menu-icon" :size="30" @click="handleFoldClick">
			<expand v-show="isFold" />
			<fold v-show="!isFold" />
		</el-icon>
		<div class="content">
			<zt-breadcrumb :breadcrumbs="breadcrumbs" />
			<user-info />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import { ref, defineEmits, computed } from 'vue'
import UserInfo from './cpms/UserInfo.vue'
import ZtBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

const emit = defineEmits(['foldChange'])
const isFold = ref(false) // 是否展开菜单
const handleFoldClick = () => {
	isFold.value = !isFold.value
	emit('foldChange', isFold.value)
}
// 面包屑
const breadcrumbs = computed(() => {
	const userMenu = useStore().state.login.userMenu
	const currentPath = useRoute().path
	return pathMapBreadcrumbs(userMenu, currentPath)
})
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
