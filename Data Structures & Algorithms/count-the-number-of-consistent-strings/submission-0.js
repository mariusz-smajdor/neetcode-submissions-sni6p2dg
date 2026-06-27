class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        const allowedArr = new Array(26).fill(0)

        for (const ch of allowed) {
            allowedArr[ch.charCodeAt(0) - 97]++
        }

        let count = 0
        for (const word of words) {
            let add = 1
            for (const ch of word) {
                if (!allowedArr[ch.charCodeAt(0) - 97]) {
                    add = 0
                }
            }
            count += add
        }

        return count
    }
}
