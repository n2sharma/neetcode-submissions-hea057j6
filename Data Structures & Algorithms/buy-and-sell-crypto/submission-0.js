class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let boughtPrice = prices[0];
        for(let i = 1; i < prices.length; i++) {
            const currentPrice = prices[i];
            if(currentPrice < boughtPrice){
                boughtPrice = currentPrice;
            }
            const currentProfit = currentPrice - boughtPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
        }
        return maxProfit;
    }
}
