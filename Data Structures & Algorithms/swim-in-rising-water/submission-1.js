class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent][0] <= this.heap[i][0]) break;

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (
                left < this.heap.length &&
                this.heap[left][0] < this.heap[smallest][0]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right][0] < this.heap[smallest][0]
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

            i = smallest;
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

class Solution {
    swimInWater(grid) {
        let n = grid.length;

        let visited = Array.from(
            { length: n },
            () => Array(n).fill(false)
        );

        let minHeap = new MinHeap();

        // [water level required, row, column]
        minHeap.push([grid[0][0], 0, 0]);

        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];

        while (!minHeap.isEmpty()) {
            let [time, row, col] = minHeap.pop();

            if (visited[row][col]) continue;
            visited[row][col] = true;

            if (row === n - 1 && col === n - 1) {
                return time;
            }

            for (let [dr, dc] of directions) {
                let nr = row + dr;
                let nc = col + dc;

                if (
                    nr >= 0 &&
                    nr < n &&
                    nc >= 0 &&
                    nc < n &&
                    !visited[nr][nc]
                ) {
                    let newTime = Math.max(
                        time,
                        grid[nr][nc]
                    );

                    minHeap.push([newTime, nr, nc]);
                }
            }
        }

        return -1;
    }
}