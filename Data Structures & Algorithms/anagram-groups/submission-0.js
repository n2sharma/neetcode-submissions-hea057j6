class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groupAnagramMap = {};
        for(let i = 0; i < strs.length; i++) {
            let key = strs[i].split("").sort().join("");
            if(!groupAnagramMap[key]){
                groupAnagramMap[key] = []
            }

            groupAnagramMap[key].push(strs[i]);

        }

        return Object.values(groupAnagramMap)
    }
}
