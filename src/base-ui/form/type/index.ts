type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IZtFormItem {
	type: IFormType
	label: string
	rules?: any[]
	placeholder?: any
	// 针对select
	options?: any[]
	// 针对某些特殊属性，如datapicker
	otherOption?: any
}
export interface IColLayout {
	xl: number // ≥1920px 响应式栅格数或者栅格属性对象
	lg: number // ≥1200px 响应式栅格数或者栅格属性对象
	md: number // ≥992px 响应式栅格数或者栅格属性对象
	sm: number // ≥760px 响应式栅格数或者栅格属性对象
	xs: number // ≥768px 响应式栅格数或者栅格属性对象
}
// 与ZtForm中的 IProps 保持一致。
export interface IForm {
	formItem: IZtFormItem[]
	labelWidth?: string
	itemStyle?: any
	colLayout?: IColLayout
}
