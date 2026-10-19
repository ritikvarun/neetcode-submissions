
class Solution {
    validTree(n, edges) {
        // Tree mein exactly n - 1 edges hone chahiye
        if (edges.length !== n - 1) return false;

        let graph = Array.from(
            { length: n },
            () => []
        );

        // Undirected graph banao
        for (let i = 0; i < edges.length; i++) {
            let [u, v] = edges[i];

            graph[u].push(v);
            graph[v].push(u);
        }

        let visited = new Set();

        const dfs = (node, parent) => {
            visited.add(node);

            for (let neighbor of graph[node]) {
                if (neighbor === parent) continue;

                if (visited.has(neighbor)) {
                    return false;
                }

                if (!dfs(neighbor, node)) {
                    return false;
                }
            }

            return true;
        };

        // Cycle check + connectivity check
        if (!dfs(0, -1)) return false;

        return visited.size === n;
    }
}
