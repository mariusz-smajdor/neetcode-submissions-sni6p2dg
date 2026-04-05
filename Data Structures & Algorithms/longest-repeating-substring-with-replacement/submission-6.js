class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const fMap = new Map()
        let l = 0, fMax = 0, res = 0

        for (let r = 0; r < s.length; r++) {
            fMap.set(s[r], (fMap.get(s[r]) || 0) + 1)
            fMax = Math.max(fMax, fMap.get(s[r]))

            while (r - l + 1 - fMax > k) {
                console.log(s.slice(l, r))
                fMap.set(s[l], fMap.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
