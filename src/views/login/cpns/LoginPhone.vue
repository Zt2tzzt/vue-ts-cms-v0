<template>
	<div class="login-phone">
		<el-form label-width="65px" :rules="rules" :model="phone" ref="formRef">
			<el-form-item label="手机号" prop="number">
				<el-input v-model="phone.number" />
			</el-form-item>
			<el-form-item label="验证码" prop="code">
				<div class="get-code">
					<el-input v-model="phone.code" />
					<el-button type="primary" class="get-code-btn">获取验证码</el-button>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus'
import { reactive, ref, defineExpose } from 'vue'
import { rules } from '../config/phone-config'

const phone = reactive({
	number: '',
	code: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = () => {
	formRef.value?.validate(/* valid => {} */)
}
defineExpose({ loginAction })
</script>

<style scoped lang="less">
.get-code {
	display: flex;
	.get-code-btn {
		margin-left: 7px;
	}
}
</style>
