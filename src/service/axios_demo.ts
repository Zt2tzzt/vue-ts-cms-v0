import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 3000

// axios的拦截其 fn1: 请求发送成功会执行的函数 fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
	config => {
		// 想做的一些操作 1.给请求添加token 2.isLoading动画
		console.log('请求成功拦截')
		return config
	},
	err => {
		console.log('请求发送错误')
		return err
	}
)
axios.interceptors.response.use(
	res => {
		console.log('响应成功的拦截')
		return res
	},
	err => {
		console.log('服务器响应失败’')
		return err
	}
)

/* axios.request({
	method: 'GET'
}) */
// 与上面的调用方式效果相同。
axios
	.get('/get', {
		params: {
			name: 'zzt',
			age: 18
		}
	})
	.then(res => {
		console.log('---get-res---', res)
	})
axios
	.post('/post', {
		data: {
			name: 'zzt',
			age: 18
		}
	})
	.then(res => {
		console.log('---post-res---', res.data)
	})

// axios.all
axios
	.all([
		axios.get('/get', { params: { name: 'zzt', age: 18 } }),
		axios.post('/post', { data: { name: 'zzt', age: 18 } })
	])
	.then(res => {
		console.log(res) // 一个数组
	})
// Promise本身是可以有类型
new Promise<string>(resolve => {
	resolve('abc')
}).then(res => {
	console.log(res.length)
})
