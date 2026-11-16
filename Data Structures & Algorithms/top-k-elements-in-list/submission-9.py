class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqCount = {}
        result = []

        # Step 1: Count frequency
        for num in nums:
            freqCount[num] = freqCount.get(num, 0) + 1

        # Step 2: Sort by frequency (descending)
        sorted_items = sorted(
            freqCount.items(),
            key=lambda x: x[1],
            reverse=True
        )

        # Step 3: Extract top K elements
        for key, value in sorted_items[:k]:
            result.append(key)

        return result