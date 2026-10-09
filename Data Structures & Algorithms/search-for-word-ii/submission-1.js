class Solution {
    findWords(board, words) {
        let root = {};
        let END = "*";

        for (let word of words) {
            let node = root;

            for (let char of word) {
                if (!node[char]) node[char] = {};
                node = node[char];
            }

            node[END] = word;
        }

        let result = [];
        let rows = board.length;
        let cols = board[0].length;

        const dfs = (row, col, parent) => {
            let char = board[row][col];
            let node = parent[char];

            if (!node) return;

            if (node[END]) {
                result.push(node[END]);
                delete node[END];
            }

            board[row][col] = "#";

            if (row > 0 && board[row - 1][col] !== "#") {
                dfs(row - 1, col, node);
            }

            if (row < rows - 1 && board[row + 1][col] !== "#") {
                dfs(row + 1, col, node);
            }

            if (col > 0 && board[row][col - 1] !== "#") {
                dfs(row, col - 1, node);
            }

            if (col < cols - 1 && board[row][col + 1] !== "#") {
                dfs(row, col + 1, node);
            }

            board[row][col] = char;

            if (Object.keys(node).length === 0) {
                delete parent[char];
            }
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dfs(row, col, root);
            }
        }

        return result;
    }
}