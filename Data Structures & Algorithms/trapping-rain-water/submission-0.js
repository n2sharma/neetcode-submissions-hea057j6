class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;
        let n = height.length;

        for(let i = 0; i < n; i++) {
            let leftMaxHeight = 0;
            let rightMaxHeight = 0;
            for(let left = 0; left <= i; left++){
                leftMaxHeight = Math.max(leftMaxHeight, height[left]);
            }

            for(let right = i; right < n; right++){
                rightMaxHeight = Math.max(rightMaxHeight, height[right]);
            }

            let waterAtIndex = Math.min(leftMaxHeight,rightMaxHeight) - height[i];

            totalWater += waterAtIndex;
        }

        return totalWater;

    }
}
