class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
            let diffMap = new Map();

        for(let i = 0; i < nums.length; i++) {
            let num = nums[i];
            const diff = target - num;
            if(diffMap.has(diff)){
                return [diffMap.get(diff), i]
            } else {
                diffMap.set(num, i);
            }
        }
    }
}
