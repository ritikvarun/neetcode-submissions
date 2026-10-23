
class Solution {
    networkDelayTime(times, n, k) {
        let graph = Array.from(
            { length: n + 1 },
            () => []
        );

        // Step 1: Weighted graph banao
        for (let i = 0; i < times.length; i++) {
            let [u, v, w] = times[i];
            graph[u].push([v, w]);
        }

        // Step 2: Sabhi distances Infinity rakho
        let dist = new Array(n + 1).fill(Infinity);
        dist[k] = 0;

        // Simple priority queue ke liye array
        let queue = [[0, k]];

        while (queue.length > 0) {
            // Sabse chhote distance wala item nikalo
            queue.sort((a, b) => a[0] - b[0]);

            let [time, node] = queue.shift();

            // Purana, ab bekaar distance skip karo
            if (time > dist[node]) continue;

            // Neighbours ke shortest distances update karo
            for (let [neighbor, weight] of graph[node]) {
                let newTime = time + weight;

                if (newTime < dist[neighbor]) {
                    dist[neighbor] = newTime;
                    queue.push([newTime, neighbor]);
                }
            }
        }

        // Step 3: Sabhi nodes ka maximum shortest distance
        let maxTime = 0;

        for (let node = 1; node <= n; node++) {
            if (dist[node] === Infinity) return -1;

            maxTime = Math.max(maxTime, dist[node]);
        }

        return maxTime;
    }
}
