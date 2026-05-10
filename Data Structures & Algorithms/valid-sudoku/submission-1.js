class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        function isValidRow(nums){
            const setOfNum = new Set();
            for(let num of nums){
                if(num !== '.'){
                    if(setOfNum.has(num)){
                        return false;
                    } else {
                        setOfNum.add(num)
                    }
                }
            }
            return true;
        }

        // each row validation
        for(let i = 0; i < board.length; i++) {
            const row = board[i];
            const isValid = isValidRow(row);
            if(!isValid) return false;
        }

        console.log(`board length ${board.length}`)

        // each col validation
        for(let j = 0; j < board.length; j++) {
            const columnRow = []
            for (let i = 0; i < board.length; i++){
                const cell = board[i][j];
                columnRow.push(cell);
            }
            // console.log(`columnRow: ${columnRow}`)
            const isValid = isValidRow(columnRow);
            if(!isValid) return false;
        }

        // each small board validation
        for(let rowStart = 0; rowStart < board.length; rowStart+=3){
            for(let colStart = 0; colStart < board.length; colStart+=3) {
                console.log(`rowStart & colStart : (${rowStart},${colStart}) `)
            const smallBoardNums = [];
                for(let row = rowStart; row < rowStart + 3; row++) {
                    for (let col = colStart; col < colStart + 3; col++){
                        const cell = board[row][col];
                        smallBoardNums.push(cell);
                    }
                }

            console.log(`smallBoardNums: ${smallBoardNums}`)
            const isValid = isValidRow(smallBoardNums);
            if(!isValid) return false;
            }
        }
        return true
    }
}
