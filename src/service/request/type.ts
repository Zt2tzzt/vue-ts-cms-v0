import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZTRequestInterceptor<T = AxiosResponse> {
	requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
	requestInterceptorCatch?: (err: any) => any
	responseInterceptor?: (res: T) => T
	responseInterceptorCatch?: (err: any) => any
}
export interface ZTRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptor?: ZTRequestInterceptor<T>
	showLoading?: boolean
}
