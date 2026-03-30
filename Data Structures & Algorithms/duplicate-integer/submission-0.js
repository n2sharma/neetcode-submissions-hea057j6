class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqMap = {};
        for(let num of nums){
            if(freqMap[num]){
                return true;
            } else {
                freqMap[num] = 1;
            }
        }
        return false;
    }
}
