<template>
	<div class="nav-header">
		<el-icon class="fold-menu-icon" :size="30" @click="handleFoldClick">
			<expand v-show="isFold" />
			<fold v-show="!isFold" />
		</el-icon>
	</div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldClick = () => {
	isFold.value = !isFold.value
	emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
	.fold-menu-icon {
		cursor: pointer;
	}
}
</style>
