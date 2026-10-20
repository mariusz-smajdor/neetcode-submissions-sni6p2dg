class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = new Set();
        let result = 0;

        let l = 0;
        let r = 0;
        while (r < s.length) {
            if (chars.has(s[r])) {
                result = Math.max(result, r - l);
                while (chars.has(s[r])) {
                    chars.delete(s[l++]);
                }
            } else {
                chars.add(s[r]);
                r++;
            }
        }

        return Math.max(result, chars.size);
    }
}
