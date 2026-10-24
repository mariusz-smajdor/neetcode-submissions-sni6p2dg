class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 3) return n;

        let prev1 = 1;
        let prev2 = 2;

        let result = 0;
        for (let i = 3; i <= n; i++) {
            result = prev1 + prev2;
            prev1 = prev2;
            prev2 = result;
        }

        return result;
    }
}
