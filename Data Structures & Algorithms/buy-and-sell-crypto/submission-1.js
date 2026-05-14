class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let purchaseCost = prices[0];
        for(let i = 0; i < prices.length; i++){
            let currentPrice = prices[i];
            if(currentPrice < purchaseCost) {
                purchaseCost = currentPrice;
            }
            maxProfit = Math.max(maxProfit, currentPrice - purchaseCost);
        }
        return maxProfit;
    }
}
