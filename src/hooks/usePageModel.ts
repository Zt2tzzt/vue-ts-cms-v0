import { ref } from 'vue'
import PageModel from '@/components/page-model'

type CallbackFn = () => void
export default function (newCb: CallbackFn, editCb: CallbackFn) {
	const pageModelRef = ref<InstanceType<typeof PageModel>>()
	const defaultInfo = ref({})
	const handleNewBtnClick = () => {
		defaultInfo.value = {}
		if (pageModelRef.value) {
			pageModelRef.value.dialogVisible = true
		}
		newCb && newCb()
	}
	const handlEeditBtnClick = (row: any) => {
		defaultInfo.value = { ...row }
		if (pageModelRef.value) {
			pageModelRef.value.dialogVisible = true
		}
		editCb && editCb()
	}

	return [pageModelRef, handleNewBtnClick, handlEeditBtnClick, defaultInfo]
}
