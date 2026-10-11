class Solution {
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let maxArea = 0;

        const dfs = (row, col) => {
            // Out of bounds
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return 0;
            }

            // Water or already visited
            if (grid[row][col] === 0) {
                return 0;
            }

            // Mark as visited
            grid[row][col] = 0;

            // Count current cell + connected land
            let area = 1;

            area += dfs(row + 1, col);
            area += dfs(row - 1, col);
            area += dfs(row, col + 1);
            area += dfs(row, col - 1);

            return area;
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 1) {
                    let area = dfs(row, col);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }
}