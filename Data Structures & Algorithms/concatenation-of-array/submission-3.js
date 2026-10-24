class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const result = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            result[i] = nums[i];
            result[i + n] = nums[i];
        }

        return result;
    }
}
