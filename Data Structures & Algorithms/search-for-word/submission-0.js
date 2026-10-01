class Solution {
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;

        const dfs = (row, col, index) => {
            // Word complete
            if (index === word.length) {
                return true;
            }

            // Out of bounds
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return false;
            }

            // Character doesn't match
            if (board[row][col] !== word[index]) {
                return false;
            }

            // Mark visited
            let temp = board[row][col];
            board[row][col] = "#";

            // Check 4 directions
            let found =
                dfs(row + 1, col, index + 1) ||
                dfs(row - 1, col, index + 1) ||
                dfs(row, col + 1, index + 1) ||
                dfs(row, col - 1, index + 1);

            // Backtrack
            board[row][col] = temp;

            return found;
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (dfs(row, col, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}