class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const candidates = new Map();

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];
            if (candidates.has(need)) return [candidates.get(need), i];
            candidates.set(nums[i], i);
        }

        return [-1, -1];
    }
}
