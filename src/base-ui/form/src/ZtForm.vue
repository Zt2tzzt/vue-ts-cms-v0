<template>
	<div class="zt-form">
		<el-form :label-width="labelWidth">
			<el-row>
				<template v-for="item of formItem" :key="item.label">
					<el-col v-bind="colLayout">
						<el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
							<!-- input | password 元素 -->
							<template v-if="item.type === 'input' || item.type === 'password'">
								<el-input :placeholder="item.placeholder" :show-password="item.type === 'password'" />
							</template>
							<!-- select 元素 -->
							<template v-else-if="item.type === 'select'">
								<!-- select 元素需要手动设置宽度为100% -->
								<el-select :placeholder="item.placeholder" style="width: 100%">
									<el-option v-for="option of item.options" :key="option.value" :value="option.value">
										{{ option.title }}
									</el-option>
								</el-select>
							</template>
							<!-- datepicker 元素 -->
							<template v-if="item.type === 'datepicker'">
								<!-- datepicker 元素需要手动设置宽度为100% -->
								<el-date-picker style="width: 100%" v-bind="item.otherOption" />
							</template>
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import type { IZtFormItem, IColLayout } from '../type'

interface IProps {
	formItem: IZtFormItem[]
	labelWidth?: string
	itemStyle?: any
	colLayout: IColLayout
}
withDefaults(defineProps<IProps>(), {
	formItem: () => [],
	labelWidth: '90px',
	itemStyle: () => ({ padding: '10px 40px 10px 0' }),
	colLayout: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 })
})
</script>

<!-- 另一种写法 -->
<!-- <script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
	props: {
		formItem: {
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
