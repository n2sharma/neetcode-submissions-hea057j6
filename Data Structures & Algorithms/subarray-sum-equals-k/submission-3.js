class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSumMap = new Map();
        prefixSumMap.set(0, 1)
        let count = 0;
        let prefixSum = 0;
        for (let i = 0; i < nums.length; i++) {
            prefixSum += nums[i];
            const requiredSum = prefixSum - k;
            if (prefixSumMap.has(requiredSum)){
                count = count + prefixSumMap.get(requiredSum);
            }
            prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
        }
        return count;
    }
}
