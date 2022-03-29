import type { ISearchForm } from '@/base-ui/form'

export const modelFormConfig: ISearchForm = {
	formItems: [
		{
			field: 'name',
			type: 'input',
			label: '角色名',
			placeholder: '请输入角色名'
		},
		{
			field: 'intro',
			type: 'input',
			label: '角色介绍',
			placeholder: '请输入角色介绍'
		}
	],
	colLayout: { xl: 24, lg: 24, md: 24, sm: 24, xs: 24 },
	// itemStyle: { padding: '10px 0' },
	labelWidth: '80px'
}
