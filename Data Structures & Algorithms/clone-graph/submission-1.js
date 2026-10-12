class Solution {
    cloneGraph(node) {
        if (node === null) return null;

        let visited = new Map();

        const dfs = (original) => {
            if (original === null) return null;

            if (visited.has(original)) {
                return visited.get(original);
            }

            let copy = new Node(original.val, []);
            visited.set(original, copy);

            for (let neighbor of original.neighbors) {
                copy.neighbors.push(dfs(neighbor));
            }

            return copy;
        };

        return dfs(node);
    }
}