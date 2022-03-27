import type { IContentTable } from '@/base-ui/table'

export const contentTableConfig: IContentTable = {
	// 为el-tab写配置
	propList: [
		// prop: 对应数组中对象的key，min-width意为最小宽度
		{ prop: 'name', label: '商品名称', minWidth: '80' },
		{ prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
		{ prop: 'newPrice', label: '现价格', minWidth: '80', slotName: 'newPrice' },
		{ prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'imgUrl' },
		{ prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
		{ prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'startTime' },
		{ prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateTime' },
		{ label: '操作', minWidth: '120', slotName: 'handler' }
	],
	// 是否展示索引列
	showTableIndex: true,
	// 是否展示选中列
	showSelectColumn: true,
	// 表格title
	title: '商品列表'
}

/* {
	"id": 183,
	"name": "吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦",
	"oldPrice": "43",
	"newPrice": "30",
	"desc": "吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦",
	"status": 1,
	"imgUrl": "http://s11.mogucdn.com/mlcdn/17f85e/180927_5i77e04lhaalbg3dai0j4588lbahh_640x960.jpg_560x999.jpg",
	"inventoryCount": 6285,
	"saleCount": 2,
	"favorCount": 3,
	"address": "天津",
	"categoryId": 6,
	"createAt": "2021-04-30T13:43:16.000Z",
	"updateAt": "2021-04-30T13:43:16.000Z"
}, */
