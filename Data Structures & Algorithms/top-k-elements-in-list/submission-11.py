class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqCount = {}
        result=[]
        for num in nums:
            freqCount[num] = freqCount.get(num, 0) + 1
        
        sorted_items = sorted(freqCount.items(), key=lambda x: x[1], reverse=True)
    
        for key, value in sorted_items[:k]:
            result.append(key)
        
        return result
        