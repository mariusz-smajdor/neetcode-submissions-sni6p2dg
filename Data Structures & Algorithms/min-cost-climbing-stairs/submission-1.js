class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // if (cost.length < 3) return Math.min(cost);

        let prev1 = cost[0];
        let prev2 = cost[1];
        for (let i = 2; i < cost.length; i++) {
            const step = Math.min(prev1, prev2) + cost[i];
            prev1 = prev2;
            prev2 = step;
        }

        return Math.min(prev1, prev2);
    }
}
