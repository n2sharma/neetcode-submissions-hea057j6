class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currentSum = nums[0];
        let maxSubArraySum = nums[0];
        let n = nums.length;
        for(let i = 1; i < n; i++) {
            let currentNum = nums[i];
            currentSum = Math.max(currentNum, currentSum + currentNum);
            maxSubArraySum = Math.max(maxSubArraySum, currentSum);
        }
        return maxSubArraySum
    }
}
