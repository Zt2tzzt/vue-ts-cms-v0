<template>
	<div class="login-account">
		<el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
			<el-form-item label="账号" prop="name">
				<el-input v-model="account.name" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="account.password" />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus'
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '../config/account-config'

const account = reactive({
	name: '',
	password: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
	console.log('accout正在开始登陆')
	formRef.value?.validate(valid => {
		console.log('---valid---', valid)
		if (valid) {
			console.log('真正的登录逻辑')
		}
	})
}

defineExpose({ loginAction, formRef })
</script>

<style scoped></style>
