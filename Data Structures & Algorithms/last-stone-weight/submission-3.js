class Solution {
    lastStoneWeight(stones) {
        let heap = [];

        const push = (val) => {
            heap.push(val);
            let i = heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);

                if (heap[p] >= heap[i]) break;

                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        const pop = () => {
            if (heap.length === 1) return heap.pop();

            let max = heap[0];
            heap[0] = heap.pop();

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let largest = i;

                if (left < heap.length && heap[left] > heap[largest]) {
                    largest = left;
                }

                if (right < heap.length && heap[right] > heap[largest]) {
                    largest = right;
                }

                if (largest === i) break;

                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }

            return max;
        };

        for (let stone of stones) {
            push(stone);
        }

        while (heap.length > 1) {
            let y = pop();
            let x = pop();

            if (y !== x) {
                push(y - x);
            }
        }

        return heap.length ? heap[0] : 0;
    }
}