<template>
	<div class="user-info">
		<el-dropdown>
			<span class="el-dropdown-link">
				<el-avatar
					:size="25"
					src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
				/>
				<span class="nick-name">{{ nickName }}</span>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item :icon="User">用户信息</el-dropdown-item>
					<el-dropdown-item :icon="Setting">系统管理</el-dropdown-item>
					<el-dropdown-item :icon="CircleClose" divided @click="handleExitBtnClick"
						>退出登录</el-dropdown-item
					>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import { CircleClose, User, Setting } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from '@/store'
import storage from '@/utils/cache'
import { useRouter } from 'vue-router'

const nickName = computed(() => useStore().state.login.userInfo.name)
// 退出登录
const router = useRouter()
const handleExitBtnClick = () => {
	storage.deleteCache('token')
	router.push('/main')
}
</script>

<style scoped lang="less">
.el-dropdown-link {
	display: flex;
	// flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	.nick-name {
		margin-left: 5px;
	}
}
</style>
