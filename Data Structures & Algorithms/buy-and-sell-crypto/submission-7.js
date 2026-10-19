class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0;
        let r = 1;
        while (r < prices.length) {
            profit = Math.max(prices[r] - prices[l], profit);
            if (prices[r] >= prices[l]) {
                r++;
            } else {
                l++;
            }
        }
        return profit;
    }
}
