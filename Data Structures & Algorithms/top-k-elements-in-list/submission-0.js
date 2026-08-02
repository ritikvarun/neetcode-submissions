class Solution {
    topKFrequent(nums, k) {
        let count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        return Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(item => Number(item[0]));
    }
}