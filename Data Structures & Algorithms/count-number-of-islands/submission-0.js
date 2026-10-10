class Solution {
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let islands = 0;

        const dfs = (row, col) => {
            // Out of bounds
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return;
            }

            // Water or already visited
            if (grid[row][col] === "0") {
                return;
            }

            // Mark land as visited
            grid[row][col] = "0";

            // Explore 4 directions
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === "1") {
                    islands++;
                    dfs(row, col);
                }
            }
        }

        return islands;
    }
}