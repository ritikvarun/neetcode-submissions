class Solution {
    solveNQueens(n) {
        let result = [];

        let board = Array(n)
            .fill()
            .map(() => Array(n).fill("."));

        let columns = new Set();
        let diagonals = new Set();
        let antiDiagonals = new Set();

        const dfs = (row) => {
            // All queens placed
            if (row === n) {
                let solution = [];

                for (let i = 0; i < n; i++) {
                    solution.push(board[i].join(""));
                }

                result.push(solution);
                return;
            }

            for (let col = 0; col < n; col++) {
                let diagonal = row - col;
                let antiDiagonal = row + col;

                // Check if queen can be placed
                if (
                    columns.has(col) ||
                    diagonals.has(diagonal) ||
                    antiDiagonals.has(antiDiagonal)
                ) {
                    continue;
                }

                // Place queen
                board[row][col] = "Q";

                columns.add(col);
                diagonals.add(diagonal);
                antiDiagonals.add(antiDiagonal);

                // Move to next row
                dfs(row + 1);

                // Backtrack
                board[row][col] = ".";

                columns.delete(col);
                diagonals.delete(diagonal);
                antiDiagonals.delete(antiDiagonal);
            }
        };

        dfs(0);

        return result;
    }
}