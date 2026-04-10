class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
                let p1 = 0;
        let p2 = heights.length - 1;
        let maxArea = 0;
        while(p1 < p2){
            const h = Math.min(heights[p1], heights[p2]);
            const b = p2 - p1;
            const area = h * b;
            maxArea = Math.max(maxArea, area);
            if(heights[p1] < heights[p2]){
                p1++;
            } else {
                p2--;
            }
        }
        return maxArea;
    }
}
