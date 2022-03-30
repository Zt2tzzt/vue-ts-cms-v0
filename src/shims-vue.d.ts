/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare const $store: Store
declare const $filters: {
	formatTime: (val: string) => string
}

declare module '*.json'
