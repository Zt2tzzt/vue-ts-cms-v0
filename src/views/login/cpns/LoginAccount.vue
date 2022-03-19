<template>
	<div class="login-account">
		<el-form label-width="55px" :rules="rules" :model="account" ref="formRef">
			<el-form-item label="账号" prop="name">
				<el-input v-model="account.name" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="account.password" show-password />
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus'
import { reactive, defineExpose, ref } from 'vue'
import { rules } from '../config/account-config'
import storage from '@/utils/cache'
import { useStore } from 'vuex'

const account = reactive({
	name: storage.getCache('name') ?? '',
	password: storage.getCache('password') ?? ''
})
const formRef = ref<InstanceType<typeof ElForm>>()
const store = useStore()
const loginAction = (isKeepPws: boolean) => {
	formRef.value?.validate(valid => {
		if (valid) {
			// 判断是否需要记住密码
			if (isKeepPws) {
				storage.setCache('name', account.name)
				storage.setCache('password', account.password)
			} else {
				storage.deleteCache('name')
				storage.deleteCache('password')
			}
			/**
			 * 进行登录验证，5件事
			 * 1.请求token。
			 * 2.请求用户信息userInfo。
			 * 3.请求用户菜单userMenu
			 * 4.数据的保存到vuex和本地缓存
			 * 5.跳到首页
			 */
			store.dispatch('login/accountLoginAction', { ...account })
		}
	})
}

defineExpose({ loginAction, formRef })
</script>

<style scoped></style>
