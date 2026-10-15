
class Solution {
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;

        let pacific = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        let atlantic = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        const dfs = (row, col, visited, prevHeight) => {
            if (
                row < 0 || row >= rows ||
                col < 0 || col >= cols
            ) {
                return;
            }

            if (visited[row][col]) return;

            if (heights[row][col] < prevHeight) return;

            visited[row][col] = true;

            dfs(row + 1, col, visited, heights[row][col]);
            dfs(row - 1, col, visited, heights[row][col]);
            dfs(row, col + 1, visited, heights[row][col]);
            dfs(row, col - 1, visited, heights[row][col]);
        };

        // Pacific: top aur left edges se reverse DFS
        for (let col = 0; col < cols; col++) {
            dfs(0, col, pacific, heights[0][col]);
        }

        for (let row = 0; row < rows; row++) {
            dfs(row, 0, pacific, heights[row][0]);
        }

        // Atlantic: bottom aur right edges se reverse DFS
        for (let col = 0; col < cols; col++) {
            dfs(
                rows - 1, col,
                atlantic,
                heights[rows - 1][col]
            );
        }

        for (let row = 0; row < rows; row++) {
            dfs(
                row, cols - 1,
                atlantic,
                heights[row][cols - 1]
            );
        }

        // Dono oceans tak pahunchne wale cells
        let result = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (pacific[row][col] && atlantic[row][col]) {
                    result.push([row, col]);
                }
            }
        }

        return result;
    }
}
