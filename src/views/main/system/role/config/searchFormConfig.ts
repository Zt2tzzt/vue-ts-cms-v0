import type { ISearchForm } from '@/base-ui/form'

export const searchFormConfig: ISearchForm = {
	formItems: [
		{
			field: 'name',
			type: 'input',
			label: '角色名称',
			placeholder: '请输入角色名称'
		},
		{
			field: 'intro',
			type: 'input',
			label: '权限介绍',
			placeholder: '请输入权限介绍'
		},
		{
			field: 'createTime',
			type: 'datepicker',
			label: '创建时间',
			otherOption: {
				type: 'daterange',
				'start-placeholder': 'Start Date',
				'end-placeholder': 'End Date'
			}
		}
	],
	// labelWidth: '100px'
	/* itemStyle: {
		padding: '10px 40px'
	} */
	colLayout: {
		xl: 8,
		lg: 12,
		md: 24,
		sm: 24,
		xs: 24
	}
}
