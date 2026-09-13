class Solution {
    maxPathSum(root) {
        let maxSum = -Infinity;

        const dfs = (node) => {
            if (node === null) return 0;

            let left = Math.max(0, dfs(node.left));
            let right = Math.max(0, dfs(node.right));

            let currentPath = node.val + left + right;

            maxSum = Math.max(maxSum, currentPath);

            return node.val + Math.max(left, right);
        };

        dfs(root);

        return maxSum;
    }
}