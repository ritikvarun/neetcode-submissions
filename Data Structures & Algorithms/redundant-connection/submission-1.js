
class Solution {
    findRedundantConnection(edges) {
        let n = edges.length;
        let parent = [];
        let rank = new Array(n + 1).fill(1);

        for (let i = 0; i <= n; i++) {
            parent[i] = i;
        }

        const find = (node) => {
            if (parent[node] !== node) {
                parent[node] = find(parent[node]);
            }

            return parent[node];
        };

        const union = (a, b) => {
            let rootA = find(a);
            let rootB = find(b);

            // Dono already connected hain
            if (rootA === rootB) {
                return false;
            }

            // Chhote tree ko bade tree ke saath jodo
            if (rank[rootA] < rank[rootB]) {
                parent[rootA] = rootB;
            } else if (rank[rootA] > rank[rootB]) {
                parent[rootB] = rootA;
            } else {
                parent[rootB] = rootA;
                rank[rootA]++;
            }

            return true;
        };

        for (let i = 0; i < edges.length; i++) {
            let [u, v] = edges[i];

            if (!union(u, v)) {
                return [u, v];
            }
        }

        return [];
    }
}
