class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lastIndex = {}
        for index, value in enumerate(s):
            lastIndex[value] = index
        
        result = []
        size = 0
        start, end = 0, 0

        for index, value in enumerate(s):
            size += 1
            end = max(end, lastIndex[value])

            if index == end:
                result.append(size)
                size = 0
        
        return result