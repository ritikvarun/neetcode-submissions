class Solution {
    subsets(nums) {
        let result = [];
        let subset = [];

        const dfs = (i) => {
            if (i === nums.length) {
                result.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1);

            subset.pop();
            dfs(i + 1);
        };

        dfs(0);
        return result;
    }
}