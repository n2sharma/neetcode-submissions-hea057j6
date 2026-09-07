class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let setNum1 = new Set(nums1);
        let result = new Set();
        for (let num of nums2){
            if(setNum1.has(num)){
                result.add(num);
            }
        }
        return Array.from(result)
    }
}
