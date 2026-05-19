class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currentSum = nums[0];
        for(let i = 1; i < nums.length; i++){
            if(currentSum + nums[i] > nums[i]){
                currentSum = currentSum + nums[i];
            } else {
                currentSum = nums[i]
            }

            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}
