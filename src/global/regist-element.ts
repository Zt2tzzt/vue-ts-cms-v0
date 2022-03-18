import { App } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
const components = [ElButton]

export default function (app: App) {
	for (const cpn of components) {
		app.component(cpn.name, cpn)
	}
}
