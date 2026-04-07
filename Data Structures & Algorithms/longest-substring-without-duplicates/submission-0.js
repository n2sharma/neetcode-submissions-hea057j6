class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let p1 = 0;
        let p2 = 0;
        let seen = new Set();
        let longestContiguousStrLength = 0
        while(p2 < s.length){
            const char = s[p2];
            if(!seen.has(char)){
                seen.add(char);
                p2++;
                longestContiguousStrLength = Math.max(longestContiguousStrLength, p2 - p1);
            } else {
                while(seen.has(char)){
                    seen.delete(s[p1]);
                    p1++;
                }
            }
        }
        return longestContiguousStrLength;
    }
}
