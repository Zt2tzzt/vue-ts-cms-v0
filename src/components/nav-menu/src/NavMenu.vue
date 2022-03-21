<template>
	<div class="nav-menu">
		<!-- 菜单顶部logo，文字 -->
		<div class="logo">
			<img class="img" src="~@/assets/img/logo.svg" alt="logo" />
			<span class="title" v-show="!isCollapse">Vue3+TS</span>
		</div>
		<!-- 菜单 -->
		<!--
			el-sub-menu：可打开子菜单
			el-menu-item：没有子菜单
			el-menu-item-group：文本标题
		 -->
		<el-menu
			:default-active="defaultActive"
			class="el-menu-vertical-demo"
			:collapse="isCollapse"
			:unique-opened="false"
			background-color="#0c2135"
			text-color="#b7bdc3"
			active-text-color="#0a60bd"
		>
			<!-- 遍历菜单 -->
			<template v-for="item of userMenu" :key="item.id">
				<!-- 一级菜单：有子菜单 -->
				<template v-if="item.type === 1">
					<!-- el-sub-menu index属性值是string类型 -->
					<el-sub-menu :index="item.id + ''">
						<!-- 菜单标题 -->
						<template #title>
							<el-icon v-if="item.icon"><tickets /></el-icon>
							<span>{{ item.name }}</span>
						</template>
						<!-- 二级菜单 -->
						<template v-for="child of item.children" :key="child.id">
							<el-menu-item :index="child.id + ''" @click="handleElMenuItemClick(child.url)">
								<el-icon v-if="child.icon"><tickets /></el-icon>
								<span>{{ child.name }}</span>
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
				<!-- 一级菜单：无子菜单 -->
				<template v-else-if="item.type === 2">
					<el-menu-item :index="item.id + ''" @click="handleElMenuItemClick(item.url)">
						<el-icon v-if="item.icon"><tickets /></el-icon>
						<span>{{ item.name }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { useStore } from '@/store'
import { Tickets } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

defineProps<{
	isCollapse: boolean
}>()
const userMenu = computed(() => useStore().state.login.userMenu)
const router = useRouter()
const handleElMenuItemClick = (url: string) => {
	router.push({ path: url ?? '/not-fount' })
}
/**
 * 菜单选中问题的处理：
 * 1.拿到当前路径。
 * 2.与userMenu中的路径做匹配。
 * 3.将匹配后的userMenu的id设置给defaultActive
 */
const currentPath = useRoute().path
const menu = pathMapToMenu(userMenu.value, currentPath)
const defaultActive = ref(menu.id + '')
</script>

<style scoped lang="less">
.nav-menu {
	height: 100%;
	background-color: #001529;

	.logo {
		display: flex;
		height: 28px;
		padding: 12px 10px 8px 10px;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		.img {
			height: 100%;
			margin: 0 10px;
		}

		.title {
			font-size: 16px;
			font-weight: 700;
			color: white;
		}
	}

	.el-menu {
		border-right: none;
	}

	// 目录
	.el-sub-menu {
		background-color: #001529 !important;
		// 二级菜单 ( 默认背景 )
		.el-menu-item {
			padding-left: 50px !important;
			background-color: #0c2135 !important;
		}
	}

	::v-deep .el-sub-menu__title {
		background-color: #001529 !important;
	}

	// hover 高亮
	.el-menu-item:hover {
		color: #fff !important; // 菜单
	}

	.el-menu-item.is-active {
		color: #fff !important;
		background-color: #0a60bd !important;
	}
}
.el-menu-vertical:not(.el-menu--collapse) {
	width: 100%;
	height: calc(100% - 48px);
}
</style>
