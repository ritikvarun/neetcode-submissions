class Solution {
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0;

        // Maximum k stops means at most k + 1 flights
        for (let i = 0; i <= k; i++) {
            let temp = [...prices];

            for (let [from, to, price] of flights) {
                if (prices[from] === Infinity) continue;

                temp[to] = Math.min(
                    temp[to],
                    prices[from] + price
                );
            }

            prices = temp;
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}