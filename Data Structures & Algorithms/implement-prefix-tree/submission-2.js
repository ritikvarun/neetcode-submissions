class PrefixTree {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    insert(word) {
        let current = this;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!current.children[char]) {
                current.children[char] = new PrefixTree();
            }

            current = current.children[char];
        }

        current.isEnd = true;
    }

    search(word) {
        let current = this;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!current.children[char]) {
                return false;
            }

            current = current.children[char];
        }

        return current.isEnd;
    }

    startsWith(prefix) {
        let current = this;

        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];

            if (!current.children[char]) {
                return false;
            }

            current = current.children[char];
        }

        return true;
    }
}