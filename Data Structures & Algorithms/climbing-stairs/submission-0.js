class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let result = [0, 1]
        for(let i = 2; i <= n+1; i++){
            result[i] = result[i-1] + result[i-2];
        }
        return result[n+1]
    }
}
