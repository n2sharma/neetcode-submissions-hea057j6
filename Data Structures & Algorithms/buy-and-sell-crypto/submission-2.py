class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maximumProfit = 0
        purchaseCost = prices[0]
        for i in range(1, len(prices)):
            currentPrice = prices[i]
            if currentPrice < purchaseCost:
                purchaseCost = currentPrice
            maximumProfit = max(maximumProfit, currentPrice - purchaseCost)
        
        return maximumProfit
            
        