import type { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'

export interface IRootState {
	name: string
	age: number
}
export interface IRootWithModule extends IRootState {
	login: ILoginState
	system: ISystemState
}
