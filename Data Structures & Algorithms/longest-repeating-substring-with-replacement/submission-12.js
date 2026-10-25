class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;
        const chars = new Map();
        let res = 0;

        let l = 0;
        for (let r = 0; r < n; r++) {
            const ch = s[r];
            chars.set(ch, (chars.get(ch) || 0) + 1);
            chars[ch.charCodeAt(0) - 65]++;

            const maxInChars = Math.max(...chars.values());

            while (r - l + 1 - maxInChars > k) {
                chars.set(s[l], chars.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}

/*
 
  
*/
