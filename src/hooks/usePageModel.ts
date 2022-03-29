import { ref } from 'vue'
import PageModel from '@/components/page-model'

type CallbackFn = (row?: any) => void
/**
 * @description: 此函数用于，新建/编辑时，执行回调函数，做相应的操作，如操作password输入框是否需要隐藏。
 * @Author: ZeT1an
 * @param {CallbackFn} newCb 新建按钮点击，调用的回调函数
 * @param {CallbackFn} editCb 编辑按钮点击，调用的回调函数
 * @return {void}
 */
export default function (newCb?: CallbackFn, editCb?: CallbackFn) {
	const pageModelRef = ref<InstanceType<typeof PageModel>>()
	const defaultInfo = ref({})
	const handleNewBtnClick = () => {
		defaultInfo.value = {}
		if (pageModelRef.value) {
			pageModelRef.value.dialogVisible = true // 弹出弹窗
		}
		newCb && newCb()
	}
	const handlEeditBtnClick = (row: any) => {
		defaultInfo.value = { ...row }
		if (pageModelRef.value) {
			pageModelRef.value.dialogVisible = true // 弹出弹窗
		}
		editCb && editCb(row)
	}

	return [pageModelRef, handleNewBtnClick, handlEeditBtnClick, defaultInfo]
}
