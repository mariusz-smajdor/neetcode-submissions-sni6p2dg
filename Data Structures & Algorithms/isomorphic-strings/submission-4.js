class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const mapS = {}
        const mapT = {}

        for (let i = 0; i < s.length; i++) {
            if ((mapS[s[i]] && mapS[s[i]] !== t[i]) || (mapT[t[i]] && mapT[t[i]] !== s[i])) {
                return false
            } else {
                mapS[s[i]] = t[i]
                mapT[t[i]] = s[i]
            }
        }

        return true
    }
}
