class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let i = 0
        while (nums[i] === nums[i + 1]) i++
        const isIncreasing = nums[i] < nums[ i+ 1];

        if (isIncreasing) {
            while (i < nums.length) {
                if (nums[i] > nums[i + 1]) return false;
                i++
            }
        } else {
            while (i < nums.length) {
                if (nums[i] < nums[i + 1]) return false;
                i++
            }
        }

        return true
    }
}
