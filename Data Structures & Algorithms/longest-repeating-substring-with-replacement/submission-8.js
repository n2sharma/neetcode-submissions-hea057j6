class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let left = 0;
        let right = 0;
        let maxFreq = 0;
        let freqMap = new Map()
        while(right < s.length){
            let char = s[right];
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
            maxFreq = Math.max(maxFreq, freqMap.get(char));
            let currentLength = right - left + 1;
            console.log(`currentLength: ${currentLength}`)
            console.log(`maxFreq: ${maxFreq}`);
            if(currentLength - maxFreq <= k){
                maxLength = Math.max(maxLength, currentLength);
            } else {
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            }
            right++;
        }
        return maxLength;
    }
}
