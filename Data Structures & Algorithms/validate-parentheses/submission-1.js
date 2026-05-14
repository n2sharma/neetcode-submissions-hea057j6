class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const bracketsMap = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        const stack = []

        for(let i = 0; i < s.length; i++){
            let char = s[i];

            if(bracketsMap[char]){
                const recentChar = stack.pop();
                if(recentChar !== bracketsMap[char]){
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
