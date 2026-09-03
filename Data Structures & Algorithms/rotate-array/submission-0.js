class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let i = 0;
        while(i < k) {
            const lastElement = nums.pop();
            nums.unshift(lastElement);
            i++;
        }
    }
}
