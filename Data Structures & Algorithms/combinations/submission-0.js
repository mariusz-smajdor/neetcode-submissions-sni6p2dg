class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const output = [];
        const stack = [];

        function backtrack(start) {
            if (stack.length === k) {
                output.push([...stack]);
                return;
            }

            for (let i = start; i <= n; i++) {
                stack.push(i);
                backtrack(i + 1);
                stack.pop();
            }
        }

        backtrack(1);

        return output;
    }

    /*
        [1 2]
    
    */
}
