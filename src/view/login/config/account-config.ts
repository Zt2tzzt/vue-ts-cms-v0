export const rules = {
	name: [
		{
			required: true,
			message: '用户名必须填写',
			trigger: 'blur'
		},
		{
			pattern: /^[a-zA-Z0-9]{5,10}$/, // 由5到10个任意字母数字组成（正则中不能有空格）
			message: '用户名必须是5-10个字母或数字',
			trigger: 'blur'
		}
	],
	password: [
		{
			required: true,
			message: '密码必须填写',
			trigger: 'blur'
		},
		{
			pattern: /^[a-z0-9]{3,}$/,
			message: '密码必须是3位以上数字',
			trigger: 'blur'
		}
	]
}
