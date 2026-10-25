class Solution {
    minCostConnectPoints(points) {
        let n = points.length;

        let visited = new Array(n).fill(false);
        let minDist = new Array(n).fill(Infinity);

        minDist[0] = 0;
        let totalCost = 0;

        for (let count = 0; count < n; count++) {
            let minCost = Infinity;
            let current = -1;

            // Find the unvisited point with minimum cost
            for (let i = 0; i < n; i++) {
                if (!visited[i] && minDist[i] < minCost) {
                    minCost = minDist[i];
                    current = i;
                }
            }

            visited[current] = true;
            totalCost += minCost;

            // Update costs of connecting other points
            for (let next = 0; next < n; next++) {
                if (!visited[next]) {
                    let distance =
                        Math.abs(points[current][0] - points[next][0]) +
                        Math.abs(points[current][1] - points[next][1]);

                    minDist[next] = Math.min(minDist[next], distance);
                }
            }
        }

        return totalCost;
    }
}