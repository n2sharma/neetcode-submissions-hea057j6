class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        for(let i = 0; i < s.length; i++){
            let fMap = new Map();
            let maxFreq = 0;
            for(let j = i; j < s.length; j++){
                const char = s[j];
                fMap.set(char, (fMap.get(char) || 0) + 1);
                maxFreq = Math.max(maxFreq, fMap.get(char));

                let length = j - i + 1;
                if(length - maxFreq <= k){
                    maxLength = Math.max(maxLength, length);
                }
            }
        }
        return maxLength;
    }
}
