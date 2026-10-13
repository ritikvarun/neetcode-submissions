
class Solution {
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let queue = [];

        // Step 1: Saare treasure cells queue mein daalo
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === 0) {
                    queue.push([row, col]);
                }
            }
        }

        let index = 0;

        // Step 2: BFS start karo
        while (index < queue.length) {
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

                // Grid ke bahar check
                if (
                    newRow < 0 || newRow >= rows ||
                    newCol < 0 || newCol >= cols
                ) {
                    continue;
                }

                // Sirf empty land ko update karo
                if (grid[newRow][newCol] !== 2147483647) {
                    continue;
                }

                grid[newRow][newCol] = grid[row][col] + 1;

                queue.push([newRow, newCol]);
            }
        }
    }
}
