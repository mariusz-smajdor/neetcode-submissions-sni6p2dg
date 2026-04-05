class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }

        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) { [1,2,3,4,5,6,7,8,9] 
        const keyValues = this.keyStore.get(key) || []
        let l = 0
        let r = keyValues.length - 1

        let res = ''
        while (l <= r) {
            const mid = Math.floor((r + l) / 2)

            if (keyValues[mid][1] > timestamp) {
                r = mid - 1
            } else {
                res = keyValues[mid][0]
                l = mid + 1
            }
        }

        return res
    }
}
