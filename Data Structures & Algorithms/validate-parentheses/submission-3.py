class Solution:
    def isValid(self, s: str) -> bool:
        brackets_map = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        stack = []

        for char in s:
            if char in brackets_map:
                if not stack:
                    return False
                recent_char = stack.pop()
                if recent_char != brackets_map[char]:
                    return False; 
            else:
                stack.append(char);

        return len(stack) == 0