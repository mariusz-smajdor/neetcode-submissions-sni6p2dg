class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const map = {}

        for (const ch of text) {
            if (!'balon'.includes(ch)) continue
            if (ch === 'o' || ch === 'l') {
                map[ch] = (map[ch] || 0) + 0.5
            } else {
                map[ch] = (map[ch] || 0) + 1
            }
        }
        const mapValues = Object.values(map)
        if (mapValues.length !== 5) return 0
        return Math.floor(Math.min(...mapValues))
    }
}
