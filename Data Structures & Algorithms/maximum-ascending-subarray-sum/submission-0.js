class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let curr = nums[0]
        let res = 0

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                curr += nums[i]
            } else {
                res = Math.max(res, curr)
                curr = nums[i]
            }
        }

        return Math.max(res, curr)
    }
}
