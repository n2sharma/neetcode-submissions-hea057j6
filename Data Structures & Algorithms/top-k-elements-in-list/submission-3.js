class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqObj = {};
        let result = []
        let bucket = new Array(nums.length + 1).fill().map(() => []);
        for(let num of nums){
            freqObj[num] = (freqObj[num] || 0) + 1;
        }

        for(let key in freqObj){
            const freq = freqObj[key];
            bucket[freq].push(Number(key));
        }

        console.log(bucket)

        for(let i = bucket.length - 1; i >= 0; i--) {
            for(let num of bucket[i]){
            result.push(num);
            if(result.length === k) return result;
            }

        }
    }

}
