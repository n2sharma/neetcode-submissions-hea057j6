class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let low = 0 
        let mid = 0
        let high = nums.length - 1;

        while(mid <= high){
            if(nums[mid] === 0) { // swap low and mid
                this.swap(nums, mid, low)
                low++;
                mid++;
            } else if (nums[mid] === 1) {
                mid++;
            } else {
                this.swap(nums, mid, high)
                high--;
            }
        }
    }

    swap(nums, index1, index2){
        let temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }
}
