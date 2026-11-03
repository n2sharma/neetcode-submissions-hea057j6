class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        seen = set(nums)
        return True if (len(seen) != len(nums)) else False
        