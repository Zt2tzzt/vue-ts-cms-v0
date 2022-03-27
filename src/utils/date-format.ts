import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc) // 使用 utc 插件

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export default function formatUtcString(utcStr: string, format: string = DATE_TIME_FORMAT) {
	return dayjs.utc(utcStr).format(format)
}
