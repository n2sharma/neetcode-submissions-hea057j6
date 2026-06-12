class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = []
        let n = nums.length;
        nums.sort((a, b) => a - b);
        for(let i = 0; i < n - 2; i++){
            if(i > 0 && nums[i] === nums[i-1]){
                continue;
            }
            let left = i+1;
            let right = n-1;
            while(left < right){
                let currentSum = nums[i] + nums[left] + nums[right]
                if(currentSum === 0){
                    result.push([nums[i], nums[left], nums[right]])
                    left++;
                    right--;
                    
                    while(left < right && nums[left] === nums[left-1]){
                        left++;
                    }
                    while(left < right && nums[right] === nums[right+1]){
                        right++;
                    }
                } else if (currentSum > 0) {
                    right--;
                } else{
                    left++;
                }
            }
        }
        return result;
    }
}
