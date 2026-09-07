class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let word1Array = word1.split('');
        let word2Array = word2.split('');
        let resultArray = []
        let p1 = 0;
        let p2 = 0;
        while(p1 < word1Array.length && p2 < word2Array.length){
            resultArray.push(word1Array[p1]);
            resultArray.push(word2Array[p2]);
            p1++;
            p2++;
        }
        if (p1 < word1Array.length){
            resultArray.push(...word1Array.slice(p1));
        }
        if (p2 < word2Array.length){
            resultArray.push(...word2Array.slice(p2));
        }
        return resultArray.join('')
    }
}
