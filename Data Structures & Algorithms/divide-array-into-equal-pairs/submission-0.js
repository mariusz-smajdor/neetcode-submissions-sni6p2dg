class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const map = new Map()

        for (const num of nums) {
            if (map.has(num)) {
                map.delete(num)
            } else {
                map.set(num, 1)
            }
        }

        return !Boolean(map.size)
    }
}
