class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length - 1
        while(s[i] && s[i] === ' ') i--
        let j = i
        while(s[j] && s[j] !== ' ') j--
        return i - j
    }
}
