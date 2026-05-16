class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let isIncreasing = false, isDecreasing = false

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                isIncreasing = true
            }
            if (nums[i] < nums[i - 1]) {
                isDecreasing = true
            }
        }

        return !(isIncreasing && isDecreasing)
    }
}
