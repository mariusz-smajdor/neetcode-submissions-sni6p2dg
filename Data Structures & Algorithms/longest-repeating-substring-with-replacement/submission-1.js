class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map()
        let maxf = 0
        let res = 0
        let l = 0

        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            maxf = Math.max(map.get(s[r]), maxf)

            while (r - l + 1 - maxf > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1)
        }
        return res
    }
}
