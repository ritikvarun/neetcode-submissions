
class Solution {
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;

        const dfs = (row, col) => {
            if (
                row < 0 || row >= rows ||
                col < 0 || col >= cols
            ) {
                return;
            }

            if (board[row][col] !== "O") return;

            // Border se connected O ko temporarily safe mark karo
            board[row][col] = "#";

            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };

        // Step 1: Left aur right borders ke O safe mark karo
        for (let row = 0; row < rows; row++) {
            dfs(row, 0);
            dfs(row, cols - 1);
        }

        // Step 2: Top aur bottom borders ke O safe mark karo
        for (let col = 0; col < cols; col++) {
            dfs(0, col);
            dfs(rows - 1, col);
        }

        // Step 3: Baaki O ko X, aur safe # ko O banao
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (board[row][col] === "O") {
                    board[row][col] = "X";
                } else if (board[row][col] === "#") {
                    board[row][col] = "O";
                }
            }
        }
    }
}
