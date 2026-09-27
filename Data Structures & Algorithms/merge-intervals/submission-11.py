class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x : x[0])
        result = [intervals[0]]

        for currentInterval in intervals[1:]:
            lastInterval = result[-1]
            if lastInterval[1] >= currentInterval[0]:
                lastInterval[1] = max(lastInterval[1], currentInterval[1])
            else:
                result.append(currentInterval)

        return result
         
        