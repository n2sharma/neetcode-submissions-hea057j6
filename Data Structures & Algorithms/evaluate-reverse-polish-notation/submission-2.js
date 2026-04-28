class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let num1;
        let num2;
        for(let i = 0; i < tokens.length; i++) {
            let char = tokens[i];
            switch(char){
                case '+':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    stack.push(num2 + num1);
                    break;
                case '*':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    stack.push(num2 * num1);
                    break;
                case '-':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    stack.push(num2 - num1);
                    break;
                case '/':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    stack.push(Math.trunc(num2 / num1));
                    break;
                default:
                    stack.push(Number(char));
            }
        }
        return stack.pop();
    }
}
