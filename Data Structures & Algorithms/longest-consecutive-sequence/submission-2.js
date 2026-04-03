class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSeq = 0;
        let currentSeq = 0
        let setOfNums = new Set(nums);
        console.log(setOfNums)
        for(let num of setOfNums){
            if(!setOfNums.has(num-1)){
                let i = 0;
                currentSeq = 0;
                while(setOfNums.has(num + i)){
                    currentSeq += 1;
                    i++;
                }
                console.log(`currentSeq: ${currentSeq}`)
                longestSeq = Math.max(longestSeq, currentSeq);
            }
        }
        return longestSeq;
    }
}
