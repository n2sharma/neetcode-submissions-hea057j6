class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
              let n = nums.length;

        const freqMap = new Map()

        const result = []
  
        for (let i = 0; i < n; i++){
            let num = nums[i];
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        let freqBucket = new Array(n + 1).fill().map(() => [])

        for (let [key, value] of freqMap){
            freqBucket[value].push(key)
        }

        for(let i = freqBucket.length - 1; i >= 0; i--){
            if(freqBucket[i].length > 0 && result.length < k){
                result.push(...freqBucket[i])
            }
        }

        return result.slice(0, k)

    }
}
