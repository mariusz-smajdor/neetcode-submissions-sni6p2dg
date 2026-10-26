class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const n = word1.length;
        const m = word2.length;
        const shorter = Math.min(n, m);
        const out = [];

        let i = 0;
        while (i < shorter) {
            out.push(word1[i], word2[i]);
            i++;
        }

        for (let i1 = i; i1 < n; i1++) {
            out.push(word1[i1]);
        }

        for (let i2 = i; i2 < m; i2++) {
            out.push(word2[i2]);
        }

        return out.join("");
    }
}
