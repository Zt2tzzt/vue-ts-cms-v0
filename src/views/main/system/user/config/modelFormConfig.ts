import type { ISearchForm } from '@/base-ui/form'

export const modelFormConfig: ISearchForm = {
	formItems: [
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
			field: 'password',
			type: 'input',
			label: '密码',
			placeholder: '请输入密码',
			isHidden: false
		},
		{
			field: 'cellphone',
			type: 'input',
			label: '电话号码',
			placeholder: '请输入电话号码'
		},
		{
			field: 'departmentId',
			type: 'select',
			label: '选择部门',
			placeholder: '请选择部门'
		},
		{
			field: 'roleId',
			type: 'select',
			label: '选择角色',
			placeholder: '请选择角色'
		}
	],
	colLayout: { xl: 24, lg: 24, md: 24, sm: 24, xs: 24 },
	// itemStyle: { padding: '10px 0' },
	labelWidth: '80px'
}
