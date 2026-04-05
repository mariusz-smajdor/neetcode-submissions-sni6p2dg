class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0]
        let res = 0

        for (let i = 1; i < prices.length; i++) {
            res = Math.max(prices[i] - minBuy, res)
            if (prices[i] < minBuy) minBuy = prices[i]
        }
        return res
    }
}
