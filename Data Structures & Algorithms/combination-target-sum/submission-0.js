class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const output = [];
        const stack = [];

        function backtrack(start, sum) {
            if (sum > target) {
                return;
            }

            if (sum === target) {
                output.push([...stack]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                stack.push(nums[i]);
                backtrack(i, sum + nums[i]);
                stack.pop();
            }
        }

        backtrack(0, 0);

        return output;
    }
}
