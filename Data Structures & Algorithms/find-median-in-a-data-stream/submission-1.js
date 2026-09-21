class MedianFinder {
    constructor() {
        this.small = []; // Max Heap
        this.large = []; // Min Heap
    }

    addNum(num) {
        // Max Heap push
        this.small.push(num);
        let i = this.small.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.small[p] >= this.small[i]) break;
            [this.small[p], this.small[i]] = [this.small[i], this.small[p]];
            i = p;
        }

        // Move max -> Min Heap
        this.minPush(this.maxPop());

        // Balance
        if (this.large.length > this.small.length + 1) {
            this.maxPush(this.minPop());
        }
    }

    findMedian() {
        if (this.large.length > this.small.length) {
            return this.large[0];
        }

        return (this.large[0] + this.small[0]) / 2;
    }

    // ---------- Max Heap ----------
    maxPush(val) {
        this.small.push(val);
        let i = this.small.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.small[p] >= this.small[i]) break;
            [this.small[p], this.small[i]] = [this.small[i], this.small[p]];
            i = p;
        }
    }

    maxPop() {
        if (this.small.length === 1) return this.small.pop();

        let max = this.small[0];
        this.small[0] = this.small.pop();

        let i = 0;

        while (true) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let largest = i;

            if (l < this.small.length && this.small[l] > this.small[largest]) largest = l;
            if (r < this.small.length && this.small[r] > this.small[largest]) largest = r;

            if (largest === i) break;

            [this.small[i], this.small[largest]] = [this.small[largest], this.small[i]];
            i = largest;
        }

        return max;
    }

    // ---------- Min Heap ----------
    minPush(val) {
        this.large.push(val);
        let i = this.large.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.large[p] <= this.large[i]) break;
            [this.large[p], this.large[i]] = [this.large[i], this.large[p]];
            i = p;
        }
    }

    minPop() {
        if (this.large.length === 1) return this.large.pop();

        let min = this.large[0];
        this.large[0] = this.large.pop();

        let i = 0;

        while (true) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let smallest = i;

            if (l < this.large.length && this.large[l] < this.large[smallest]) smallest = l;
            if (r < this.large.length && this.large[r] < this.large[smallest]) smallest = r;

            if (smallest === i) break;

            [this.large[i], this.large[smallest]] = [this.large[smallest], this.large[i]];
            i = smallest;
        }

        return min;
    }
}