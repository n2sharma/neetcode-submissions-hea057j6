class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0;
        let result = []
        let word1Length = word1.length;
        let word2Length = word2.length;
        while (i < word1Length || i < word2Length){
            if(i < word1Length){
                result.push(word1[i]);
            }
            if(i < word2Length){
                result.push(word2[i]);
            }
            i++;
        }
        return result.join('')
    }
}
