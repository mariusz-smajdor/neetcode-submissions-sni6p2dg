class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let ret = 0
        let i = 0
        while (i < nums.length) {
            let count = 0
            while (nums[i] === 1) {
                count++
                i++
            }
            ret = Math.max(ret, count)
            while (nums[i] === 0) i++
        }
        return ret
    }
}
