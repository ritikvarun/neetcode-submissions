class Solution {
    findItinerary(tickets) {
        let graph = new Map();

        // Step 1: Build adjacency list
        for (let [from, to] of tickets) {
            if (!graph.has(from)) {
                graph.set(from, []);
            }
            graph.get(from).push(to);
        }

        // Step 2: Sort destinations in reverse order
        for (let destinations of graph.values()) {
            destinations.sort().reverse();
        }

        let route = [];

        // Step 3: DFS
        const dfs = (airport) => {
            let destinations = graph.get(airport);

            while (destinations && destinations.length > 0) {
                let nextAirport = destinations.pop();
                dfs(nextAirport);
            }

            route.push(airport);
        };

        dfs("JFK");

        // Step 4: Reverse the route
        return route.reverse();
    }
}