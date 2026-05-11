class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (const str of strs) {
            const anagramId = str.split('').sort().join('')

            if (map.get(anagramId)) {
                map.get(anagramId).push(str)
            } else {
                map.set(anagramId, [str])
            }
        }

        return [...map.values()]
    }
}
