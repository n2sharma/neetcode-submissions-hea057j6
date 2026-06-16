class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = {};
        function dfs(str){
            if(str in memo){
                return memo[str];
            }
            if(str.length === 0) return true;

            for(let word of wordDict){
                if(str.startsWith(word)){
                    let remaning = str.slice(word.length);
                    if(dfs(remaning)){
                        memo[str] = true;
                        return true;
                    }
                }
            }
            memo[str] = false;
            return false;
        }
        return dfs(s)
    }
}
