import type { IUserFormData } from '@/views/main/system/user/type'
import { ref } from 'vue'
import PageContent from '@/base-ui/page-content'

export default function usePageSearch() {
	// 拿到page-content组件对象
	const pageContentRef = ref<InstanceType<typeof PageContent>>()
	// search部分重置点击
	const handleResetBtnClick = () => {
		pageContentRef.value?.getPageData()
	}
	// search部分搜索点击
	const handleQueryBtnClick = (queryInfo: IUserFormData) => {
		pageContentRef.value?.getPageData(queryInfo)
	}

	return [pageContentRef, handleResetBtnClick, handleQueryBtnClick]
}
