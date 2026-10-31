class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const freq = {};
        const ret = new Set();

        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
            if (freq[num] > nums.length / 3) {
                ret.add(num);
            }
        }

        return Array.from(ret)
    }
}
