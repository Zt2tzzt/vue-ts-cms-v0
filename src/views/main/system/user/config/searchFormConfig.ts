import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
	formItem: [
		{
			field: 'name',
			type: 'input',
			label: '用户名',
			placeholder: '请输入用户名'
		},
		{
			field: 'password',
			type: 'input',
			label: '密码',
			placeholder: '请输入密码'
		},
		{
			field: 'sport',
			type: 'select',
			label: '喜欢的运动',
			placeholder: '选择喜欢的运动',
			options: [
				{ title: '篮球', value: 'basketball' },
				{ title: '足球', value: 'football' }
			]
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
	]
	// labelWidth: '100px'
	/* itemStyle: {
		padding: '10px 40px'
	} */
}