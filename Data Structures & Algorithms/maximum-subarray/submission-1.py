class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        currentSum = nums[0]

        for i in range(1, len(nums)):
            if currentSum + nums[i] > nums[i]:
                currentSum = currentSum + nums[i]
            else:
                currentSum = nums[i]

            if currentSum > maxSum:
                maxSum = currentSum
        
        return maxSum
        