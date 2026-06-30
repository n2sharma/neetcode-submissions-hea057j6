class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let indexToReach = nums.length - 1;
        let memo = new Array(nums.length).fill(-1);
        function dfs(idx){
            if(idx >= indexToReach){
                return true;
            }
            if(memo[idx] !== -1){
                return memo[idx] === 1;
            }
            for(let jump = 1; jump <= nums[idx]; jump++){
                if(dfs(idx+jump) === true) {
                    memo[idx] = 1;
                    return true;
                }
            }
            return false;
        }
        return dfs(0);
    }
}
