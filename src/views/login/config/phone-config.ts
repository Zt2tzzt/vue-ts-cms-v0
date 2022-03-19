export const rules = {
	number: [
		{
			required: true,
			message: '手机号不能为空',
			trigger: 'blur'
		},
		{
			pattern: /^[0-9]{11}$/,
			message: '手机号格式有误',
			trigger: 'blur'
		}
	],
	code: [
		{
			required: true,
			message: '验证码不能为空',
			trigger: 'blur'
		},
		{
			pattern: /^[0-9]{4}$/,
			message: '验证码格式有误',
			trigger: 'blur'
		}
	]
}
