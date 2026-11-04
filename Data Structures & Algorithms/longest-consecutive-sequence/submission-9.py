class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        maximumLength = 0

        for num in numSet:
            if num - 1 in numSet:
                continue
            else:
                currentNum = num + 1
                currentLength = 1
                while(currentNum in numSet):
                    currentNum += 1
                    currentLength += 1
            maximumLength = max(maximumLength, currentLength)
        return maximumLength
