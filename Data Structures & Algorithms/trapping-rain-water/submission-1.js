class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let leftP = 0;
        let rightP = n - 1;
        let maxLeftHeight = 0;
        let maxRightHeight = 0;
        let totalWater =0
        while (leftP < rightP){
            if(height[leftP] < height[rightP]){
                if(height[leftP] > maxLeftHeight){
                    maxLeftHeight = height[leftP];
                } else {
                    totalWater += maxLeftHeight - height[leftP];
                }
                leftP++;
            } else {
                if(height[rightP] > maxRightHeight){
                    maxRightHeight = height[rightP];
                } else {
                    totalWater += maxRightHeight - height[rightP]
                }
                rightP--;
            }
        }

        return totalWater;
    }
}
