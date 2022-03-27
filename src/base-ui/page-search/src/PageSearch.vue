<template>
	<div class="page-search">
		<zt-form v-bind="searchFormConfig" v-model="formData">
			<template #header>
				<h2 class="header">高级检索</h2>
			</template>
			<template #footer>
				<div class="btns-handle">
					<el-button @click="handleResetBtnClick">
						<el-icon><refresh /></el-icon>
						重置
					</el-button>
					<el-button type="primary" @click="handleQueryBtnClick">
						<el-icon><search /></el-icon>
						搜索
					</el-button>
				</div>
			</template>
		</zt-form>
	</div>
</template>

<script setup lang="ts">
import ZtForm from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
import { defineProps, ref, defineEmits } from 'vue'
import type { ISearchForm } from '@/base-ui/form'
import type { IUserFormData } from '@/views/main/system/user/type'

const props = defineProps<{
	searchFormConfig: ISearchForm
}>()
const emits = defineEmits<{
	(e: 'resetBtnClick'): void
	(e: 'queryBtnClick', formData: IUserFormData): void
}>()

// searchFormConfig中各对象field属性值，作为该对象的key
const formOriginData: any = {}
for (const item of props.searchFormConfig.formItems) {
	formOriginData[item.field] = ''
}
const formData = ref(formOriginData)

// 重置按钮点击，使用双向绑定
const handleResetBtnClick = () => {
	for (const key in formOriginData) {
		if (Object.prototype.hasOwnProperty.call(formOriginData, key)) {
			formData.value[key] = formOriginData[key]
		}
	}
	emits('resetBtnClick')
}
// 重置按钮点击，使用双向绑定
/* const handleResetBtnClick = () => {
	formData.value = formOriginData
} */

// 搜索按钮点击
const handleQueryBtnClick = () => {
	emits('queryBtnClick', formData.value)
}
</script>

<style scoped lang="less">
.header {
	color: red;
}
.btns-handle {
	text-align: right;
	padding: 0 50px 20px 0;
}
</style>
