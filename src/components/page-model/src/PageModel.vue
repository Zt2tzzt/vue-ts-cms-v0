<template>
	<div class="page-model">
		<!-- destroy-on-close，当关闭 Dialog 时，销毁其中的元素 -->
		<el-dialog v-model="dialogVisible" :title="title" width="30%" center destroy-on-close>
			<zt-form v-bind="modelFormConfig" v-model="formData" />
			<!-- 默认插槽 -->
			<slot></slot>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="handleConfirmBtnClick">确定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts">
import ZtForm from '@/base-ui/form'
import { ref, defineProps, defineExpose, withDefaults, watch } from 'vue'
import type { ISearchForm } from '@/base-ui/form'
import { useStore } from '@/store'

interface IProps {
	title: string
	modelFormConfig: ISearchForm
	defaultInfo?: any
	pageName: string
	// 用于保存新建或编辑时，除了form以外的其它数据，如角色管理中的角色数据。
	otherInfo?: any
}
const props = withDefaults(defineProps<IProps>(), {
	defaultInfo: () => ({}),
	otherInfo: () => ({})
})

// 是否弹出弹窗，默认不弹出。
const dialogVisible = ref(false)
const formData = ref<any>({})
// 监听defaultInfo的变化，根据它生成formData。
watch(
	() => props.defaultInfo,
	newVal => {
		for (const item of props.modelFormConfig.formItems) {
			formData.value[`${item.field}`] = newVal[`${item.field}`]
		}
	}
)

// 确定按钮点击
const store = useStore()
const handleConfirmBtnClick = () => {
	dialogVisible.value = false
	if (Reflect.ownKeys(props.defaultInfo).length) {
		// 编辑
		store.dispatch('system/editPageDataAction', {
			pageName: props.pageName,
			editData: { ...formData.value, ...props.otherInfo },
			id: props.defaultInfo.id
		})
	} else {
		// 新建
		store.dispatch('system/createPageDataAction', {
			pageName: props.pageName,
			newData: { ...formData.value, ...props.otherInfo }
		})
	}
}

defineExpose({ dialogVisible })
</script>

<style scoped lang="less"></style>
