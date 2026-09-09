class Solution {
    topKFrequent(nums, k) {
        let count = {};

        // Step 1: Frequency Count
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        // Step 2: Convert object to array and sort by frequency
        return Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(item => Number(item[0]));
    }
}

// Example
const sol = new Solution();

console.log(sol.topKFrequent([1, 1, 1, 2, 2, 3], 2));
// Output: [1, 2]