class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        leftPrefix = [1 for _ in range(n)]
        rightPrefix = [1 for _ in range(n)]
        result = []

        for i in range(1, n):
            leftPrefix[i] = leftPrefix[i-1] * nums[i-1] #[1, 1, 2, 8]
        for i in range(n-2, -1, -1):
            rightPrefix[i] = rightPrefix[i+1] * nums[i+1] #[48, 24, 6, 1]
        
        for i in range(n):
            result.append(leftPrefix[i] * rightPrefix[i])

        return result

