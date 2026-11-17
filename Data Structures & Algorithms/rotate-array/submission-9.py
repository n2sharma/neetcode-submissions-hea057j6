class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)
        def reverse(left, right):
            while (left < right):
                temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp
                left += 1
                right -= 1
        
        reverse(0, len(nums)-1)
        print(nums)
        reverse(0, k-1)
        print(nums)

        reverse(k, len(nums)-1)
        print(nums)


        return nums;

        