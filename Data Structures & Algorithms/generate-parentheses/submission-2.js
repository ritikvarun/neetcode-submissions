class Solution {
    generateParenthesis(n) {
        let result = [];

        const dfs = (current, open, close) => {
            if (open === n && close === n) {
                result.push(current);
                return;
            }

            // Add (
            if (open < n) {
                dfs(current + "(", open + 1, close);
            }

            // Add )
            if (close < open) {
                dfs(current + ")", open, close + 1);
            }
        };

        dfs("", 0, 0);

        return result;
    }
}