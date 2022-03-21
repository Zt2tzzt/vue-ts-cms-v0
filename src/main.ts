import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'

import router from '@/router'
import store, { setupStore } from '@/store'

const app = createApp(App)
app.use(store)
/**
 * use(router)会执行router对象中的install函数，其中会将当前页面与路由做匹配，
 * 将setupStore放在use(router)上，意为先注册路由，再匹配路由。
 */
setupStore()
app.use(router)
app.mount('#app')
