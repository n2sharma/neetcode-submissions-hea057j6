class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        maxLength = 0
        numsSet = set(nums)
        
        for num in numsSet:
            if num-1 in numsSet:
                continue
            else:
                currentNum = num+1
                currentMaxLength = 1
                while(currentNum in numsSet):
                    currentNum += 1
                    currentMaxLength += 1
                maxLength = max(currentMaxLength, maxLength)
        return maxLength
