class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let result = []
        let freqBucket = new Array(n+1).fill().map(() => []);
        let freqMap = new Map();
        for (let i = 0; i < n; i++){
            let num = nums[i];
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        for (let [key, value] of freqMap){
            freqBucket[value].push(key)
        }

        for (let i = freqBucket.length - 1; i >= 0; i--){
            if(freqBucket[i].length > 0){
                result.push(...freqBucket[i])
                if(result.length >= k){
                    return result.slice(0, k);
                }
            }
        }
    }
}
