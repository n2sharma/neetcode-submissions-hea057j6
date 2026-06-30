class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let indexToReach = nums.length - 1;
        function dfs(idx){
            if(idx >= indexToReach){
                return true;
            }
            for(let jump = 1; jump <= nums[idx]; jump++){
                if(dfs(idx+jump) === true) return true;
            }
            return false;
        }
        return dfs(0);
    }
}
