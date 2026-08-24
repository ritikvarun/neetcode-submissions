class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        this.left = new Node(0, 0);   // LRU
        this.right = new Node(0, 0);  // MRU

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert(node) {
        let prev = this.right.prev;

        prev.next = node;
        node.prev = prev;

        node.next = this.right;
        this.right.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        let node = this.cache.get(key);

        this.remove(node);
        this.insert(node);

        return node.val;
    }

    put(key, value) {

        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        let node = new Node(key, value);

        this.cache.set(key, node);
        this.insert(node);

        if (this.cache.size > this.capacity) {

            let lru = this.left.next;

            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}