class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let left = 0
        let right = nums.slice(1).reduce((acc, curr) => acc + curr, 0)

        if (left === right) return 0

        for (let i = 1; i < nums.length; i++) {
            if (left === right) return i - 1
            left += nums[i - 1]
            right -= nums[i]
        }

        return left === right ? nums.length - 1 : -1
    }
}
