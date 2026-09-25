class Solution {
    combinationSum(candidates, target) {
        let result = [];

        const dfs = (index, current, total) => {

            if (total === target) {
                result.push([...current]);
                return;
            }

            if (index >= candidates.length || total > target) {
                return;
            }

            // Take current number
            current.push(candidates[index]);
            dfs(index, current, total + candidates[index]);

            // Backtrack
            current.pop();

            // Skip current number
            dfs(index + 1, current, total);
        };

        dfs(0, [], 0);
        return result;
    }
}