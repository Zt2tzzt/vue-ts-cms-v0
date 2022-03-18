class LocalCache {
	storage: Storage
	constructor(isLocal = true) {
		this.storage = isLocal ? localStorage : sessionStorage
	}

	setCache(key: string, value: any) {
		if (value) {
			const res = JSON.stringify(value)
			this.storage.setItem(key, res)
		}
	}

	getCache(key: string) {
		const value = this.storage.getItem(key)
		return value ? JSON.parse(value) : undefined
	}

	deleteCache(key: string) {
		this.storage.removeItem(key)
	}

	clearCache() {
		this.storage.clear()
	}
}

export default new LocalCache()
