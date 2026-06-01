class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        function helper(n, memo) {
            if (n === 0 || n === 1) return 1;

            if(memo.has(n)){
                return memo.get(n);
            }

            const result = helper(n-1, memo) + helper(n-2, memo);
            memo.set(n, result);
            return result;
        }

        let memo = new Map()
        return helper(n, memo);
    }
}
