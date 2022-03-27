import type { IContentTable } from '@/base-ui/table'

export const contentTableConfig: IContentTable = {
	// 为el-tab写配置
	propList: [
		// prop: 对应数组中对象的key，min-width意为最小宽度
		{ prop: 'name', label: '用户名', minWidth: '100' },
		{ prop: 'realname', label: '真实姓名', minWidth: '100' },
		{ prop: 'cellphone', label: '手机号', minWidth: '100' },
		{ prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
		{ prop: 'departmentId', label: '部门', minWidth: '100' },
		{ prop: 'createAt', label: '创建时间', minWidth: '150', slotName: 'startTime' },
		{ prop: 'updateAt', label: '更新时间', minWidth: '150', slotName: 'updateTime' },
		{ label: '操作', minWidth: '120', slotName: 'handler' }
	],
	// 是否展示索引列
	showTableIndex: true,
	// 是否展示选中列
	showSelectColumn: true,
	// 表格title
	title: '用户列表'
}
