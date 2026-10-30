class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counts = {};

        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
            if (counts[num] > nums.length / 2) return num;
        }

        return -1;
    }
}
