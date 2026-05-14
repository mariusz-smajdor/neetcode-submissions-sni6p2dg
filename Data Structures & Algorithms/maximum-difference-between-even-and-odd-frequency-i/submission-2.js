class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = {}
        let maxOdd = 0
        let minEven = Infinity

        for (const ch of s) {
            freq[ch] = (freq[ch] || 0) + 1
        }

        for (const val of Object.values(freq)) {
            if (val % 2 === 0) {
                minEven = Math.min(minEven, val)
            } else {
                maxOdd = Math.max(maxOdd, val)
            }
        }

        return maxOdd - minEven
    }
}
