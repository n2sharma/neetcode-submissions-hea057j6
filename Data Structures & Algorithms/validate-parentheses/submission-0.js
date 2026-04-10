class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parenthesesMap = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }
        const stack = [];
        for(let i = 0; i < s.length; i++){
            const char = s[i];
            if(parenthesesMap[char]){
                let recentChar = stack.pop();
                if(parenthesesMap[char] !== recentChar) return false;
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
