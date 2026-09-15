class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for (let num of nums) {
            this.add(num);
        }
    }

    add(val) {
        this.heap.push(val);
        this.bubbleUp();

        if (this.heap.length > this.k) {
            this.heap[0] = this.heap.pop();

            if (this.heap.length > 0) {
                this.bubbleDown();
            }
        }

        return this.heap[0];
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    bubbleDown() {
        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] =
            [this.heap[smallest], this.heap[i]];

            i = smallest;
        }
    }
}