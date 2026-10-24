class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        let result = -1;
        let min = prices[0];

        for (let i = 1; i < prices.length; i++) {
            result = Math.max(result, money - (min + prices[i]));
            min = Math.min(min, prices[i]);
        }

        return result > -1 ? result : money;
    }
}

/*
    take first two chocolates and min of them
    calculate result based on them

    loop over rest chocolates
        if choco is less than or equal to min calculate result based on prev min and cur min

*/
