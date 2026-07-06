class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const freqMap = new Map();
        const result = [];
        for (let i = 0; i < n; i++){
            const num = nums[i];
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const freqBucket = new Array(n+1).fill().map(() => []);
        console.log(freqBucket)

        for (let [key, value] of freqMap){
            freqBucket[value].push(key);
        }

        for (let i = freqBucket.length-1; i >= 0; i--){
            if(freqBucket[i].length > 0){
                result.push(...freqBucket[i]);
                if(result.length >= k){
                    return result.slice(0, k)
                }
            }
        }
    }
}
