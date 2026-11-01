class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const diff = new Map();
        let l = 0;
        let r = 0;

        while (r < s1.length) {
            diff.set(s1[r], (diff.get(s1[r]) || 0) - 1);
            if (diff.get(s1[r]) === 0) {
                diff.delete(s1[r]);
            }

            diff.set(s2[r], (diff.get(s2[r]) || 0) + 1);
            if (diff.get(s2[r]) === 0) {
                diff.delete(s2[r]);
            }

            r++;
        }

        while (r < s2.length) {
            if (diff.size === 0) {
                return true;
            }

            diff.set(s2[l], (diff.get(s2[l]) || 0) - 1);
            if (diff.get(s2[l]) === 0) {
                diff.delete(s2[l]);
            }

            diff.set(s2[r], (diff.get(s2[r]) || 0) + 1);
            if (diff.get(s2[r]) === 0) {
                diff.delete(s2[r]);
            }

            l++;
            r++;
        }

        return diff.size === 0;
    }
}
