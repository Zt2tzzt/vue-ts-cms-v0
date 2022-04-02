import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc) // 使用 utc 插件

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 * @description: 此函数用于，对时间做格式化
 * @Author: ZeT1an
 * @param {string} utcStr utc时间字符串
 * @param {string} formatPattern 格式化的格式
 * @return {string} 格式化之后的时间字符串
 */
export default function formatUtcString(utcStr: string, formatPattern: string = DATE_TIME_FORMAT) {
	return dayjs.utc(utcStr).utcOffset(8).format(formatPattern)
}
