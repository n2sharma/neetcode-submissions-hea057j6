class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        for(let i = 0; i < nums.length; i++){
            let num = nums[i];
            const diff = target - num;
            if(numsMap.has(diff)){
                return [numsMap.get(diff), i];
            } else {
                numsMap.set(num, i);
            }
        }
    }
}
