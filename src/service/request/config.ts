// 方式一，手动切换不同环境
/* const BASE_URL = 'http://zzt.org/dev'
const BASE_NAME = 'zzt'

const BASE_URL = 'http://zzt.org/prod'
const BASE_NAME = 'lingard'

const BASE_URL = 'http://zzt.org/test'
const BASE_NAME = 'DeBruyne' */

// 方式二，根据process.env.NODE_ENV区分
/**
 * 开发环境：development
 * 生产环境：production
 * 测试环境：text
 */
let BASE_URL: string
const TIME_OUT = 3000

switch (process.env.NODE_ENV) {
	case 'development':
		BASE_URL = 'http://123.207.32.32:9001'
		break
	case 'production':
		BASE_URL = 'http://zzt.org/prod'
		break
	case 'test':
		BASE_URL = 'http://zzt.org/prod'
		break
}

export { BASE_URL, TIME_OUT }
