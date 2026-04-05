class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length - 1; ++i) {
            for (let j = i + 1; j < nums.length; j++) {
                if (i === j) continue;
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
