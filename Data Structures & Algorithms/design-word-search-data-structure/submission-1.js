class WordDictionary {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }

    addWord(word) {
        let current = this;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!current.children[char]) {
                current.children[char] = new WordDictionary();
            }

            current = current.children[char];
        }

        current.isEnd = true;
    }

    search(word) {
        const dfs = (node, index) => {
            if (index === word.length) {
                return node.isEnd;
            }

            let char = word[index];

            // Normal character
            if (char !== ".") {
                if (!node.children[char]) {
                    return false;
                }

                return dfs(node.children[char], index + 1);
            }

            // "." means any character
            for (let key in node.children) {
                if (dfs(node.children[key], index + 1)) {
                    return true;
                }
            }

            return false;
        };

        return dfs(this, 0);
    }
}