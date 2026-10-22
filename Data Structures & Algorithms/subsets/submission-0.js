class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const n = nums.length;
        const output = [];
        const stack = [];

        function backtrack(start) {
            if (stack.length > n) return;

            output.push([...stack]);
            for (let i = start; i < n; i++) {
                stack.push(nums[i]);
                backtrack(i + 1);
                stack.pop();
            }
        }

        backtrack(0);

        return output;
    }

    /*
        []
        [1]
            [2]
                [3]
            [2 3]
        [1 2]
        [1 2 3]
        [1 3]
    */
}
