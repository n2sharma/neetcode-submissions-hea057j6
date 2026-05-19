class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [intervals[0]];
        for (let i = 1; i < intervals.length; i++){
            let firstInterval = result[result.length - 1];
            let secondInterval = intervals[i];
            if(firstInterval[1] >= secondInterval[0]){
                result[result.length - 1] = [firstInterval[0], Math.max(firstInterval[1], secondInterval[1])];
            } else {
                result.push(intervals[i])
            }
        }
        return result;
    }
}
