class Solution {
    leastInterval(tasks, n) {
        const count = new Map();

        for (let task of tasks) {
            count.set(task, (count.get(task) || 0) + 1);
        }

        let maxFreq = Math.max(...count.values());

        let maxCount = 0;
        for (let freq of count.values()) {
            if (freq === maxFreq) maxCount++;
        }

        return Math.max(
            tasks.length,
            (maxFreq - 1) * (n + 1) + maxCount
        );
    }
}