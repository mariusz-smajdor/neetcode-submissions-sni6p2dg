class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const strMap = {}

        for (const str of strs) {
            const sorted = str.split('').sort().join('')
            if (!strMap[sorted]) {
                strMap[sorted] = []
            }
            strMap[sorted].push(str)
        }
        const ret = []
        for (const [_, val] of Object.entries(strMap)) {
            ret.push(val)
        }
        return ret
    }
}
