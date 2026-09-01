class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currentSum = nums[0];
        let maxSubArraySum = nums[0];
        let n = nums.length;

        for (let i = 1; i < n; i++){
            let num = nums[i];
            currentSum = Math.max(num, currentSum + num);
            maxSubArraySum = Math.max(currentSum, maxSubArraySum);
        }

        return maxSubArraySum
    }
}
