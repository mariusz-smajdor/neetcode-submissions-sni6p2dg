class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {}

        for (const num of nums) {
            hash[num] = (hash[num] || 0) + 1
            if (hash[num] === 2) return true
        }

        return false
    }
}
