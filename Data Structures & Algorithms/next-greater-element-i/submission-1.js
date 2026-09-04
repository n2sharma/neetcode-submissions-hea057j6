class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let stack = []
        let ngeMap = new Map();
        let ans = []
        for(let i = nums2.length-1; i >= 0; i--){
            let num = nums2[i];
            while(stack.length > 0 && stack[stack.length-1] <= num ){
                stack.pop()
            }
            if (stack.length === 0) {
                ngeMap.set(num, -1);
            } else {
                ngeMap.set(num, stack[stack.length - 1]);
            }
            stack.push(num);
        }
        for(let i = 0; i < nums1.length; i++) {
            ans.push(ngeMap.get(nums1[i]));
        }
        return ans
    }
}
