class Solution {
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        let result = [];

        const dfs = (start, current) => {
            result.push([...current]);

            for (let i = start; i < nums.length; i++) {

                // Same level par duplicate ko skip karo
                if (i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                current.push(nums[i]);

                dfs(i + 1, current);

                current.pop();
            }
        };

        dfs(0, []);

        return result;
    }
}