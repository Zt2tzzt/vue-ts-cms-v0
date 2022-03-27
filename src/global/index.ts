import { App } from 'vue'
import registProperties from './regist-properties'

export default function (app: App) {
	app.use(registProperties)
}
