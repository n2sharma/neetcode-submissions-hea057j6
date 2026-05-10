class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqObj = {}
        for(let i = 0; i < strs.length; i++){
            const sortedWord = strs[i].split('').sort().join('');
            if(freqObj[sortedWord]) {
                freqObj[sortedWord].push(strs[i]);
            }else {
                freqObj[sortedWord] = [strs[i]];
            }
        }
    console.log(freqObj)
        return Object.values(freqObj)
    }
}
