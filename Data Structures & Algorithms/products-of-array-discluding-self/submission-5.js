class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let prefixProduct = new Array(n).fill().map(() => 1);
        let suffixProduct = new Array(n).fill().map(() => 1);        
        const result = new Array(n).fill().map(() => 1);
        for (let i = 1; i < prefixProduct.length; i++){
            prefixProduct[i] = prefixProduct[i-1] * nums[i-1];
        }
        for (let i = n - 1 - 1; i >= 0; i--){
            suffixProduct[i] = suffixProduct[i+1] * nums[i+1];
        }
        for (let i = 0; i < result.length; i++) {
            result[i] = prefixProduct[i] * suffixProduct[i]
        }
        return result;
    }
}
