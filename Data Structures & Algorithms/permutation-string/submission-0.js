class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0, r = s1.length - 1
        const sortedS1 = s1.split('').sort().join('')

        while (r < s2.length) {
            if (s2.slice(l, r + 1).split('').sort().join('') === sortedS1) {
                return true
            }
            l++
            r++
        }
        return false
    }
}
