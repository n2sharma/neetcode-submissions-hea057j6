class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqObj = {};
        for(let num of nums){
            freqObj[num] = (freqObj[num] || 0) + 1;
        }
        const sortedKeys = Object.keys(freqObj).sort((a, b) => freqObj[b] - freqObj[a]);
    return sortedKeys.slice(0,k)

    }

}
