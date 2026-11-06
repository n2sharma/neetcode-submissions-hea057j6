class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        diffMap = {}
        for (i, num) in enumerate(numbers):
            diff = target - num
            if diff in diffMap:
                return [diffMap[diff]+1, i+1]
            else:
                diffMap[num] = i
