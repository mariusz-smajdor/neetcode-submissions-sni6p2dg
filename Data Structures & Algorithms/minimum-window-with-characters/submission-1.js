class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return ''
        let res = [0, Infinity]
        const sf = new Map()
        const tf = new Map()

        for (let i = 0; i < t.length; i++) {
            tf.set(t[i], (tf.get(t[i]) || 0) + 1)
            sf.set(s[i], (sf.get(s[i]) || 0) + 1)
        }

        const checkFrequencies = () => {
            for (const [char, count] of tf) {
                if ((sf.get(char) || 0) < count) {
                    return false
                }
            }
            return true
        }
        let l = 0, r = t.length - 1
        while (r < s.length) {
            while (checkFrequencies()) {
                if (res[1] - res[0] > r - l) {
                    res = [l, r]
                }
                sf.set(s[l], sf.get(s[l]) - 1)
                if (sf.get(s[l]) === 0) sf.delete(s[l])
                l++
            }
            r++
            if (r < s.length)
                sf.set(s[r], (sf.get(s[r]) || 0) + 1)
        }
        console.log(res)
        return res.includes(Infinity) ? '' : s.slice(res[0], res[1] + 1)
    }
}
