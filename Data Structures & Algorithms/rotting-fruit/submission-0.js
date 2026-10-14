
class Solution {
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;

        let queue = [];
        let fresh = 0;
        let minutes = 0;

        // Step 1: Rotten fruits queue mein, fresh fruits count karo
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 2) {
                    queue.push([row, col]);
                } else if (grid[row][col] === 1) {
                    fresh++;
                }
            }
        }

        let index = 0;

        // Step 2: Multi-source BFS
        while (index < queue.length && fresh > 0) {
            let size = queue.length - index;

            // Ek level = ek minute
            for (let i = 0; i < size; i++) {
                let [row, col] = queue[index];
                index++;

                let directions = [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1]
                ];

                for (let [dr, dc] of directions) {
                    let newRow = row + dr;
                    let newCol = col + dc;

                    if (
                        newRow < 0 || newRow >= rows ||
                        newCol < 0 || newCol >= cols
                    ) {
                        continue;
                    }

                    if (grid[newRow][newCol] !== 1) {
                        continue;
                    }

                    grid[newRow][newCol] = 2;
                    fresh--;
                    queue.push([newRow, newCol]);
                }
            }

            minutes++;
        }

        // Step 3: Check if any fresh fruit remains
        return fresh === 0 ? minutes : -1;
    }
}
