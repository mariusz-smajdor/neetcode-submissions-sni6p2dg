class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0, r = s1.length - 1
        const s1Count = new Array(26).fill(0)
        const s2Count = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++
            s2Count[s2.charCodeAt(i) - 97]++
        }

        function compare() {
            for (let i = 0; i < 26; i++)
                if (s1Count[i] !== s2Count[i]) return false
            return true
        }

        while (r < s2.length) {
            console.log(s1Count, s2Count, '\n')
            if (compare()) return true
            s2Count[s2.charCodeAt(l) - 97]--
            l++
            r++
            s2Count[s2.charCodeAt(r) - 97]++
        }
        return false
    }
}
