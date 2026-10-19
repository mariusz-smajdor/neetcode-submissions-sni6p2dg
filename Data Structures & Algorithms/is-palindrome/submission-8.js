class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const n = s.length;

        let l = 0;
        let r = n - 1;

        const isAlpha = (ch) =>
            (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9");

        while (l < r) {
            while (l < n && !isAlpha(s[l])) l++;
            while (r >= 0 && !isAlpha(s[r])) r--;

            if (!(l < r)) return true;

            if (s[l++].toLowerCase() !== s[r--].toLowerCase()) return false;
        }

        return true;
    }
}
