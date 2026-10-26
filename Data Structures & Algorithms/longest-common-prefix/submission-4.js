class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort();
        let l = strs[0];
        let r = strs[strs.length - 1];
        let pre = [];

        if (l === "") return "";

        for (let i = 0; i < l.length; i++) {
            if (i < r.length && l[i] === r[i]) {
                pre.push(l[i]);
            } else {
                break;
            }
        }

        return pre.join("");
    }
}
