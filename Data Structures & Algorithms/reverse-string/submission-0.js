class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const n = s.length;
        let l = 0;
        let r = n - 1;

        while (l < r) {
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
        }
    }
}
