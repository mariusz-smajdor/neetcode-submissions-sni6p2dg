class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) return 0
        let window = s.length
            
        console.log(s.slice(0, window + 1))

        while (window > 0) {
            for (let i = 0; i + window <= s.length; i++) {
                const slicedStr = s.slice(i, window + i)
                if (new Set(slicedStr).size === slicedStr.length) {
                    return window
                }
            }
            window--
        }
    }
}
