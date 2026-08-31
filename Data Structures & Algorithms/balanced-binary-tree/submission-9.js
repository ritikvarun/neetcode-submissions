class Solution {
    isBalanced(root) {

        const dfs = (node) => {
            if (node === null) return 0;

            let left = dfs(node.left);
            if (left === -1) return -1;

            let right = dfs(node.right);
            if (right === -1) return -1;

            if (Math.abs(left - right) > 1) {
                return -1;
            }

            return 1 + Math.max(left, right);
        };

        return dfs(root) !== -1;
    }
}