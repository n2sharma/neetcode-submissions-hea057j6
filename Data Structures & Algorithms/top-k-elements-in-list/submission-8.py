class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqMap = {}
        for num in nums:
            freqMap[num] = freqMap.get(num, 0) + 1
        
        freqBucket = [[] for _ in range(len(nums) + 1)]

        for num, count in freqMap.items():
            freqBucket[count].append(num)

        result = []

        for i in range(len(freqBucket) -1, 0, -1):
            for num in freqBucket[i]:
                result.append(num)

                if(len(result) == k):
                    return result
