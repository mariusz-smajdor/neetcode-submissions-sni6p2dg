class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const map = {}

        for (const str of arr) {
            map[str] = (map[str] || 0) + 1
        }

        const res = arr.filter(i => map[i] === 1)
        return res[k - 1] || ''
    }
}
