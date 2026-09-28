class Solution {
    permute(nums) {
        let result = [];

        const dfs = (current) => {

            if (current.length === nums.length) {
                result.push([...current]);
                return;
            }

            for (let num of nums) {

                if (current.includes(num)) {
                    continue;
                }

                current.push(num);
                dfs(current);
                current.pop();
            }
        };

        dfs([]);
        return result;
    }
}