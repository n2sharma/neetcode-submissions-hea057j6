class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length).fill(1);
        let suffix = new Array(nums.length).fill(1);
        let result = new Array(nums.length).fill(1);
        for(let i = 1; i < prefix.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1];
        }
        for(let i = suffix.length - 2; i >= 0; i--) {
            console.log(`nums[i+1]: ${nums[i+1]}`);
            suffix[i] = suffix[i+1] * nums[i+1];
        }
        for(let i = 0; i < result.length; i++){
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}
