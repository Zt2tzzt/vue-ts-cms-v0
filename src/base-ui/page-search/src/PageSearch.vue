<template>
	<div class="page-search">
		<zt-form v-bind="searchFormConfig" v-model="formData">
			<template #header>
				<h2 class="header">高级检索</h2>
			</template>
			<template #footer>
				<div class="btns-handle">
					<el-button
						><el-icon><refresh /></el-icon>
						重置
					</el-button>
					<el-button type="primary">
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
import { defineProps, PropType } from 'vue'
import type { IForm } from '@/base-ui/form'
import { ref } from 'vue'

/* defineProps<{
	searchFormConfig: IForm
}>() */
defineProps({
	searchFormConfig: {
		type: Object as PropType<IForm>,
		required: true
	}
})
// searchFormConfig中各对象field属性值，作为该对象的key
const formData = ref({
	name: '',
	password: '',
	sport: '',
	createTime: ''
})
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
