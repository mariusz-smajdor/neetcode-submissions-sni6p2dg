class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        const n = s.length;
        const m = t.length;

        let j = 0
        for (let i = 0; i < n; i++) {
            if (j === m) return 0
            if (s[i] === t[j]) {
                j++
            }
        }

        return m - j
    }
}
