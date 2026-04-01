class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for(let word of strs){
            const lengthOfWord = word.length;
            encodedStr += `${lengthOfWord}#${word}`
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(`str: ${str}`);
        let decodedArray = [];
        let i = 0;
        let j = 0;
        while(i < str.length){
            let char = str[j];
            if(char === "#"){
                const lengthOfWord = Number(str.slice(i, j));
                decodedArray.push(str.slice(j+1, j+1+lengthOfWord));
                j = j + lengthOfWord;
                i = j + 1;
            }
            j += 1;
        }
        return decodedArray;
    }
}
