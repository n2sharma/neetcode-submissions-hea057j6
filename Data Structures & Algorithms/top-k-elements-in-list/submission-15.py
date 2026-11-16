class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqCount = {}
        result = []
        for num in nums:
            freqCount[num] = freqCount.get(num, 0) + 1
        
        freqBucket = [[] for _ in range(len(nums) + 1)]
        
        for key, value in freqCount.items():
            freqBucket[value].append(key)

        for i in range(len(freqBucket)-1, 0, -1):
            if(len(freqBucket[i]) > 0):
                result.extend(freqBucket[i])

        return result[:k]