class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let result = new Array(n).fill().map(() => 1);

        let prefix = 1;
        for (let i = 0; i < result.length; i++){
            result[i] = prefix;
            prefix = prefix * nums[i];
        }

        let suffix = 1;
        for (let i = n - 1; i >= 0; i--){
            result[i] = result[i] * suffix;
            suffix = suffix * nums[i];
        }
        return result
    }
}
