class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let p1 = 0;
        let p2 = 0;
        while (p2 < nums.length){
            if (nums[p2] !== 0){
                let temp = nums[p1];
                nums[p1] = nums[p2];
                nums[p2] = temp;
                p1++;
            }
            p2++;
        }
    }
}
