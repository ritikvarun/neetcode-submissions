
class Solution {
    countComponents(n, edges) {
        let graph = Array.from(
            { length: n },
            () => []
        );

        // Step 1: Undirected graph banao
        for (let i = 0; i < edges.length; i++) {
            let [u, v] = edges[i];

            graph[u].push(v);
            graph[v].push(u);
        }

        let visited = new Set();
        let components = 0;

        const dfs = (node) => {
            visited.add(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };

        // Step 2: Har unvisited node se DFS start karo
        for (let node = 0; node < n; node++) {
            if (!visited.has(node)) {
                components++;
                dfs(node);
            }
        }

        return components;
    }
}
