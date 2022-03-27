<template>
	<div class="app">
		<el-config-provider :locale="locale">
			<router-view></router-view>
		</el-config-provider>
	</div>
</template>

<script lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { defineComponent } from 'vue'
// 使用TS需要引入defineComponent函数
export default defineComponent({
	name: 'App',
	setup() {
		return {
			locale: zhCn
		}
	}
})
</script>

<style lang="less">
.app {
	height: 100%;
}
</style>
