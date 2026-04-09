class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        for(let i = 0; i < s.length; i++) {
            let freqMap = new Map();
            let maxFreq = 0;
            for(let j = i; j < s.length; j++){
                const char = s[j];
                freqMap.set(char, (freqMap.get(char) || 0) + 1);
                maxFreq = Math.max(maxFreq, freqMap.get(char));
                let currentLength = j - i + 1;
                if(currentLength - maxFreq <= k){
                    maxLength = Math.max(maxLength, currentLength);
                }
            }
        }
        return maxLength;
    }
}
