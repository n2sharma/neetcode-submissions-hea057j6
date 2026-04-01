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
        while(i < str.length) {
            let j = i;

            while(str[j] !== '#'){
                j++;
            }

            let lengthOfWord = Number(str.slice(i, j));

            decodedArray.push(str.slice(j+1, j + 1 + lengthOfWord));

            i = j + 1 + lengthOfWord;
        }

        return decodedArray;
    }
}
