class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        const charsMap = {}
        for (const ch of chars) {
            charsMap[ch] = (charsMap[ch] || 0) + 1
        }

        let res = 0
        for (const word of words) {
            const tmp = {...charsMap}
            let isGood = true
            for (const ch of word) {
                if (!tmp[ch]) {
                    isGood = false
                    break
                } else {
                    tmp[ch]--
                }
            }
            res += isGood ? word.length : 0
        }

        return res
    }
}
