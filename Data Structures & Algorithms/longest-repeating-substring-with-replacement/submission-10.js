class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let fq = new Map();

        let l = 0;
        let r = 0;
        let maxfq = 0;

        while (r < s.length) {
            fq.set(s[r], (fq.get(s[r]) || 0) + 1);
            maxfq = Math.max(maxfq, fq.get(s[r]));

            while (r - l + 1 - maxfq > k) {
                fq.set(s[l], fq.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);

            r++;
        }

        return res;
    }
}

/*
 
  
*/
