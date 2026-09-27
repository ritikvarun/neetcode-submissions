class Solution {
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        let result = [];

        const dfs = (start, current, total) => {

            if (total === target) {
                result.push([...current]);
                return;
            }

            if (total > target) return;

            for (let i = start; i < candidates.length; i++) {

                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                current.push(candidates[i]);
                dfs(i + 1, current, total + candidates[i]);
                current.pop();
            }
        };

        dfs(0, [], 0);
        return result;
    }
}