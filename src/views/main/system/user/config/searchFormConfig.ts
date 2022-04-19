import type { ISearchForm } from '@/base-ui/form'

export const searchFormConfig: ISearchForm = {
	formItems: [
		{
			field: 'id',
			type: 'input',
			label: 'id',
			placeholder: '请输入用户id'
		},
		{
			field: 'name',
			type: 'input',
			label: '用户名',
			placeholder: '请输入用户名'
		},
		{
			field: 'realname',
			type: 'input',
			label: '真实姓名',
			placeholder: '请输入真实姓名'
		},
		{
			field: 'cellphone',
			type: 'input',
			label: '电话号码',
			placeholder: '请输入电话号码'
		},
		{
			field: 'enable',
			type: 'select',
			label: '用户状态',
			placeholder: '选择用户状态',
			options: [
				{ title: '启用', value: 0 },
				{ title: '禁用', value: 1 }
			]
		},
		{
			field: 'createAt',
			type: 'datepicker',
			label: '创建时间',
			// 用于 el-date-picker 元素的属性选项
			otherOption: {
				type: 'daterange',
				'start-placeholder': 'Start Date',
				'end-placeholder': 'End Date'
			}
		}
	]
	// labelWidth: '100px'
	/* itemStyle: {
		padding: '10px 40px'
	} */
}
