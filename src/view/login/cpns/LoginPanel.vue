<template>
	<div class="login-panel">
		<h1 class="title">后台管理系统</h1>
		<el-tabs type="border-card" class="demo-tabs" stretch>
			<el-tab-pane>
				<template #label>
					<span class="custom-tabs-label">
						<el-icon><avatar /></el-icon>
						<span>账号登录</span>
					</span>
				</template>
				<login-account ref="accoutRef" />
			</el-tab-pane>
			<el-tab-pane>
				<template #label>
					<span class="custom-tabs-label">
						<el-icon><cellphone /></el-icon>
						<span>手机登录</span>
					</span>
				</template>
				<login-phone />
			</el-tab-pane>
		</el-tabs>
		<!-- 下方记住密码 -->
		<div class="account-control">
			<el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
			<el-link type="primary">忘记密码</el-link>
		</div>
		<!-- 登录按钮 -->
		<el-button class="login-btn" type="primary" @click="handleLoginClick"
			>立即登录</el-button
		>
	</div>
</template>

<script setup lang="ts">
import { Avatar, Cellphone } from '@element-plus/icons-vue'
import { ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'

const isKeepPassword = ref(false)
const accoutRef = ref<InstanceType<typeof LoginAccount>>()

const handleLoginClick = () => {
	accoutRef.value?.loginAction()
}
</script>

<style scoped lang="less">
.login-panel {
	margin-bottom: 150px;
	width: 320px;
	.title {
		text-align: center;
	}
	.account-control {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}
	.login-btn {
		width: 100%;
		margin-top: 5px;
	}
}
.demo-tabs > .el-tabs__content {
	padding: 32px;
	color: #6b778c;
	font-size: 32px;
	font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
	vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
	vertical-align: middle;
	margin-left: 4px;
}
</style>
