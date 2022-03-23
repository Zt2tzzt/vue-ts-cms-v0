<template>
	<div class="zt-table">
		<el-table :data="listData" border style="width: 100%">
			<template v-for="option of propList" :key="option.prop">
				<el-table-column v-bind="option" align="center">
					<!-- 使用el-table-column的默认插槽，传入要展示的内容，作用域插槽会传回每一行的数据，通过scope.row获取这一行中那一列的数据 -->
					<template v-slot="scope">
						<!-- 声明具名插槽 -->
						<slot :name="option.slotName" :row="scope.row">
							<!-- 使用默认插槽，用于需要展示的形式 -->
							{{ scope.row[option.prop] }}
						</slot>
					</template>
				</el-table-column>
			</template>
		</el-table>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
	listData: any[]
	propList: any[]
}>()
</script>

<style scoped lang="less"></style>
