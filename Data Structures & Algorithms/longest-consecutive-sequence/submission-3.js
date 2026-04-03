class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSeq = 0;
        let currentSeq = 0
        let setOfNums = new Set(nums);
        for(let num of setOfNums){
            if(!setOfNums.has(num-1)){
                let currentNum = num;
                currentSeq = 0;
                while(setOfNums.has(currentNum)){
                    currentNum++;
                    currentSeq += 1;
                }
                longestSeq = Math.max(longestSeq, currentSeq);
            }
        }
        return longestSeq;
    }
}
