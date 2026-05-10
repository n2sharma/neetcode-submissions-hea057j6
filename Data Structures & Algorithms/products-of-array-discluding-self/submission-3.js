class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let leftPrefix = new Array(n).fill().map(() => 1);
        let rightPrefix = new Array(n).fill().map(() => 1);  
        let result = [];
        for(let i = 1; i < leftPrefix.length; i++) {
            leftPrefix[i] = leftPrefix[i-1] * nums[i-1];
        }
        for(let i = rightPrefix.length - 2; i >= 0; i--) {
            rightPrefix[i] = rightPrefix[i+1] * nums[i+1];
        }     

        for(let i = 0; i < n; i++){
            result.push(leftPrefix[i] * rightPrefix[i]);
        }
        return result;
    }
}
