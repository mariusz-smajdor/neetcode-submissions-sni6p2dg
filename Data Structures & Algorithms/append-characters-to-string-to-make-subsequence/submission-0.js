class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let j = 0
        for (let i = 0; i < s.length; i++) {
            if (j === t.length) return 0
            if (s[i] === t[j]) {
                j++
            }
        }

        return t.length - j
    }
}
