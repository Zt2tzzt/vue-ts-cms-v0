import type { ILoginState } from './login/type'

export interface IRootState {
	name: string
	age: number
}
export interface IRootWithModule extends IRootState {
	login: ILoginState
}
