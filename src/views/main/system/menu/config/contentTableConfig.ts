import type { IContentTable } from '@/base-ui/table'

export const contentTableConfig: IContentTable = {
	// 为el-tab写配置
	propList: [
		// prop: 对应数组中对象的key，min-width意为最小宽度
		{ prop: 'name', label: '菜单名称', minWidth: '100' },
		{ prop: 'type', label: '类型', minWidth: '100' },
		{ prop: 'url', label: '菜单url', minWidth: '100' },
		{ prop: 'icon', label: '菜单icon', minWidth: '100' },
		{ prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'startTime' },
		{ prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' },
		{ prop: 'permission', label: '按钮权限', minWidth: '100' },
		{ label: '操作', minWidth: '120', slotName: 'handler' }
	],
	// 是否展示索引列
	showTableIndex: false,
	// 是否展示选中列
	showSelectColumn: false,
	// 表格title
	title: '菜单列表',
	// 控制表格是否可以展开（用于菜单）
	childrenProps: {
		rowKey: 'id',
		treeProp: {
			children: 'children'
		}
	},
	showFooter: false
}

/*   {
	"id": 1,
	"name": "系统管理",
	"type": 1,
	"url": "/main/system",
	"icon": "el-icon-setting",
	"sort": 2,
	"createAt": "2021-01-02T10:08:14.000Z",
	"updateAt": "2021-08-20T07:00:08.000Z",
	"children": [
			{
					"id": 2,
					"url": "/main/system/user",
					"name": "用户管理",
					"sort": 100,
					"type": 2,
					"children": [
							{
									"id": 5,
									"url": null,
									"name": "创建用户",
									"sort": null,
									"type": 3,
									"createAt": "2021-01-03 13:41:01.000000",
									"parentId": 2,
									"updateAt": "2021-08-19 16:10:06.000000",
									"permission": "system:users:create"
							},
					],
					"createAt": "2021-01-02 18:08:47.000000",
					"parentId": 1,
					"updateAt": "2021-08-19 15:52:01.000000"
			},
	]
},*/
