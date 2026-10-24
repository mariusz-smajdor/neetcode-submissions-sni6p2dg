class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
        const n = pref.length;
        let count = 0;

        for (const word of words) {
            if (word.length < n) continue;

            if (word.startsWith(pref)) {
                count++;
            }
        }

        return count;
    }
}
