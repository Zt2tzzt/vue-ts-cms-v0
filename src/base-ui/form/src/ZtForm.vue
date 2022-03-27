<template>
	<div class="zt-form">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<el-form :label-width="labelWidth">
			<el-row>
				<template v-for="item of formItems" :key="item.label">
					<el-col v-bind="colLayout">
						<el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
							<!-- input | password 元素 -->
							<template v-if="item.type === 'input' || item.type === 'password'">
								<el-input
									:placeholder="item.placeholder"
									:show-password="item.type === 'password'"
									v-model="formData[`${item.field}`]"
								/>
							</template>
							<!-- select 元素 -->
							<template v-else-if="item.type === 'select'">
								<!-- select 元素需要手动设置宽度为100% -->
								<el-select
									:placeholder="item.placeholder"
									style="width: 100%"
									v-model="formData[`${item.field}`]"
								>
									<el-option
										v-for="option of item.options"
										:key="option.value"
										:value="option.value"
									>
										{{ option.title }}
									</el-option>
								</el-select>
							</template>
							<!-- datepicker 元素 -->
							<template v-if="item.type === 'datepicker'">
								<!-- datepicker 元素需要手动设置宽度为100% -->
								<el-date-picker
									style="width: 100%"
									v-bind="item.otherOption"
									v-model="formData[`${item.field}`]"
								/>
							</template>
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>
		<div class="footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, watch, withDefaults, defineEmits, ref } from 'vue'
import type { IZtFormItem, IColLayout, IItemStyle } from '../type'

interface IProps {
	modelValue: any
	formItems: IZtFormItem[]
	labelWidth?: string
	itemStyle?: IItemStyle
	colLayout?: IColLayout
}
const props = withDefaults(defineProps<IProps>(), {
	modelValue: {},
	formItems: () => [],
	labelWidth: '90px',
	itemStyle: () => ({ padding: '10px 40px 10px 0' }),
	colLayout: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 })
})
const emits = defineEmits(['update:modelValue'])

// 双向绑定formData
const formData = ref({ ...props.modelValue })
watch(formData, newVal => emits('update:modelValue', newVal), {
	deep: true
})
// 不使用双向绑定，在每个输入框中使用 :model-value，@update:model-value
/* <el-input
		:model-value="formData[`${item.field}`]"
		@update:model-value="handleModelValueChange($event, item.field)"
/> */
/* const handleModelValueChange = (val: any, field: string) => {
	emits('update:modelValue', { ...props.modelValue, [field]: val })
} */
</script>

<!-- 另一种写法 -->
<!-- <script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
	props: {
		formItems: {
			type: Array as PropType<IZtFormItem>,
			default: () => {}
		}
	}
})
</script> -->

<style scoped lang="less">
.zt-form {
	padding-top: 22px;
}
</style>
