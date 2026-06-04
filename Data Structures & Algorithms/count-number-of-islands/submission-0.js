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
            // boundry check

            if(row < 0) return;
            if(row >= rows) return;
            if(col < 0) return;
            if(col >= cols) return;

            // if its water or already visited land then return
            if(grid[row][col] !== "1") return

            // mark the current island as visited by making it 0;
            grid[row][col] = "0"

            // explore in all 4 direction
            dfs(row-1, col); // top
            dfs(row+1, col); // bottom
            dfs(row, col+1); // right
            dfs(row, col-1); //left

        }

        for (let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){

                if(grid[row][col] === "1"){
                    noOfIsland++;

                    // visit the entire island
                    dfs(row, col)
                }
            }
        }

        return noOfIsland;
    }
}
