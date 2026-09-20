class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const counts = new Map();

        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            counts.set(sChar, (counts.get(sChar) || 0) + 1);
            if (counts.get(sChar) === 0) counts.delete(sChar);

            const tChar = t[i];
            counts.set(tChar, (counts.get(tChar) || 0) - 1);
            if (counts.get(tChar) === 0) counts.delete(tChar);
        }

        return counts.size === 0;
    }
}
