<template>
	<div class="app">
		<!-- 	<router-link to="/login">登录</router-link>
		<router-link to="/main">首页</router-link> -->
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 使用TS需要引入defineComponent函数
export default defineComponent({
	name: 'App'
})
</script>

<style lang="less">
.app {
	height: 100%;
}
</style>
