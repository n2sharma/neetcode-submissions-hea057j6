class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums); // to remove duplicates
        let maxLength = 0;
        for(let num of numsSet){
            if(numsSet.has(num-1)){
                continue;
            } else {
                let currentNum = num + 1;
                let currentSeqLength = 1;
                while(numsSet.has(currentNum)){
                    currentSeqLength++;
                    currentNum++;
                }
                maxLength = Math.max(maxLength, currentSeqLength);
            }
        }
        return maxLength;
    }
}
