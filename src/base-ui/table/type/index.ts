export interface ITableProp {
	// 传入操作（删，改）列配置时，不需要prop
	prop?: string
	label: string
	minWidth: string
	// 插槽名称
	slotName?: string
}

export interface ITableChildrenProps {
	rowKey: string
	treeProp: {
		children: string
	}
}

export interface IContentTable {
	propList: ITableProp[]
	showTableIndex: boolean
	showSelectColumn: boolean
	title: string
	childrenProps?: ITableChildrenProps
	showFooter?: boolean
}

export interface IPageInfo {
	currentPage: number
	pageSize: number
}
