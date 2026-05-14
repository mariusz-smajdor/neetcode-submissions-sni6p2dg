class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = {}

        for (const ch of s) {
            freq[ch] = (freq[ch] || 0) + 1
        }

        const freqValues = Object.values(freq)
        const oddFreqencies = freqValues.filter(val => val % 2 !== 0)
        const evenFrequencies = freqValues.filter(val => val % 2 === 0)

        return Math.max(...oddFreqencies) - Math.min(...evenFrequencies)
    }
}
