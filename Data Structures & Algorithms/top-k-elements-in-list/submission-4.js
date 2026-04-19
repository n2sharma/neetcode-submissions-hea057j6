class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let freqMap = new Map();
        let freqArray = new Array(n+1).fill().map(() => []);
        let result = []

        for(let i = 0; i < n; i++){
            let num = nums[i];
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        for(let [key, value] of freqMap){
            freqArray[value].push(key);
        }
    console.log(`freqArray: ${freqArray}`)
        for(let i = freqArray.length - 1; i >= 0; i--){
            if(freqArray[i].length){
                result.push(...freqArray[i]);
            }
            console.log(result)
            if(result.length >= k) {
                return result.slice(0, k);
            }
        }
    }
}
