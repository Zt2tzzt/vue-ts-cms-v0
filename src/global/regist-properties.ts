import { App } from 'vue'
import formatUtcString from '@/utils/date-format'

export default function registProperties(app: App) {
	app.config.globalProperties.$filters = {
		formatTime(utcStr: string) {
			return formatUtcString(utcStr)
		}
	}
}
