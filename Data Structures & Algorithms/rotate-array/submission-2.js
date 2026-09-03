class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;
        let n = nums.length-1;
        reverse(nums, 0, n);
        reverse(nums, 0, k-1)
        reverse(nums, k, n);


        function reverse(nums, left, right) {
            while(left < right){
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
                right--;
            }
        }
    }
}
