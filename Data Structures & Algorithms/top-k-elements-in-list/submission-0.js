class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        for (const num of nums) {
            map[num] = (map[num] || 0) + 1
        }
        const ret = []
        for (const obj of Object.entries(map)) {
            ret.push(obj)
        }
        return ret.sort((a,b) => b[1] - a[1]).map(e => +e[0]).slice(0, k)
    }
}
