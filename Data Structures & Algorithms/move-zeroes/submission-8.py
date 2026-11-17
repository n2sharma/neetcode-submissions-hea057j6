class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = 0
        for index, num in enumerate(nums):
            if (num != 0):
                temp = nums[k]
                nums[k] = num
                nums[index] = temp
                k+=1
        return nums

        