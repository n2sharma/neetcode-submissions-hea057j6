class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSumFreqMap = new Map();
        prefixSumFreqMap.set(0, 1);
        let count = 0;
        let prefixSum = 0;
        for (let num of nums){
            prefixSum += num;
            const requiredSum = prefixSum - k;
            if(prefixSumFreqMap.has(requiredSum)){
                count += prefixSumFreqMap.get(requiredSum);
            }
            prefixSumFreqMap.set(prefixSum, (prefixSumFreqMap.get(prefixSum) || 0) + 1);
        }
        return count;
    }
}
