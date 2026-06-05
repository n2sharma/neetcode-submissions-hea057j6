class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let perimeter = 0;

        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                if(grid[row][col] === 1){
                    perimeter  += 4;
                    
                    // top check if land exists
                    if(row > 0 && grid[row-1][col] === 1){
                        perimeter  -= 1;
                    }

                    // bottom check if land exists
                    if(row < rows - 1 && grid[row+1][col] === 1){
                        perimeter  -= 1;
                    }

                    // right check if land exists
                    if(col < cols - 1 && grid[row][col+1] === 1){
                        perimeter  -= 1;
                    }

                    // left check if land exists
                    if(col > 0 && grid[row][col-1] === 1){
                        perimeter  -= 1;
                    }                    
                }
            }
        }

        return perimeter
    }
}
