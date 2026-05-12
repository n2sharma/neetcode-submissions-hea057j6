class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequenceLength = 0;
        let numsSet = new Set(nums);
        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            if(numsSet.has(num-1)){
                continue;
            } else {
                let currentNum = num+1;
                let currentSeqLength = 1
                while(numsSet.has(currentNum)){
                    currentSeqLength++;
                    currentNum++;
                    
                }
                longestSequenceLength = Math.max(longestSequenceLength, currentSeqLength);
            }
        }
        return longestSequenceLength;
        
    }
}
