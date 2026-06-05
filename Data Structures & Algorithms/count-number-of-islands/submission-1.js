class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let noOfIsland = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        function dfs(row, col){
            // Top boundry check
            if(row < 0) return;
            // Bottom boundry check
            if(row >= rows) return;
            // Right boundry check
            if(col >= cols) return;
            // Left boundry check
            if(col < 0) return;

            if(grid[row][col] !== "1") return; // if the cell is water, return. 

            // mark currentland as visited by updting it to "0"
            grid[row][col] = "0"

            // now visit all nearby lands
            dfs(row-1, col); // top
            dfs(row+1, col); // bottom
            dfs(row, col-1); // right
            dfs(row, col+1); // left
        }

        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                if(grid[row][col] === "1"){
                    noOfIsland++;
                    dfs(row, col);
                }
            }
        }

        return noOfIsland;
    }
}
