class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array(nums.length).fill(1);
        for(let i = 1; i < nums.length; i++) {
            result[i] = result[i-1] * nums[i-1];
        }

        let rightProduct = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            result[i] = result[i] * rightProduct;
            rightProduct = rightProduct * nums[i]; 
        }
        return result;
    }
}
