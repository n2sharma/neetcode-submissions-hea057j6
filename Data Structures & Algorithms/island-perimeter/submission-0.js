class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let perimeter = 0;
        let rows = grid.length;
        let cols = grid[0].length;

        for (let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){

                // if current cell is a land
                if(grid[row][col] === 1){

                    perimeter += 4 // initially

                    // check top neighbour is also a land?
                    if (row > 0 && grid[row - 1][col] === 1){
                        perimeter -= 1;
                    }

                    // check bottom neighbour is also a land?
                    if (row < rows - 1 && grid[row + 1][col] === 1){
                        perimeter -= 1;
                    }

                    // check left neighbour is also a land?
                    if (col > 0 && grid[row][col - 1] === 1){
                        perimeter -= 1;
                    }

                    // check right neighbour is also a land?
                    if(col < cols - 1 && grid[row][col + 1] === 1){
                        perimeter -= 1;
                    }
                }
            }
        }

        return perimeter;
    }
}
