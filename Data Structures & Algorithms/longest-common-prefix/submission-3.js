class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = 0;

        for (let i = 0; i < strs[0].length; i++) {
            if (strs.every((s) => s.startsWith(strs[0].slice(0, i + 1)))) {
                result++;
            } else {
                return strs[0].slice(0, result);
            }
        }

        return strs[0].slice(0, result);
    }
}
