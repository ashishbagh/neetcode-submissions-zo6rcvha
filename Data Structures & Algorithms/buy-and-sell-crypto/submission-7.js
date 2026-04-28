class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let profit = 0;
        while (right < prices.length) {
            if (prices[right] > prices[left]) {
            profit = Math.max(prices[right] - prices[left], profit);
            } else {
             left=right;
            }
            right++;
        }

        return profit;
    }
}
