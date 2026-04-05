class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i]
            if (map.hasOwnProperty(difference)) {
                return [map[difference], i]
            }
            map[nums[i]] = i
        }
    }
}
