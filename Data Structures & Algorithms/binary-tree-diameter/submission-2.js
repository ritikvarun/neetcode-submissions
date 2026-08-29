class Solution {
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const dfs = (node) => {
            if (node === null) return 0;

            let left = dfs(node.left);
            let right = dfs(node.right);

            diameter = Math.max(diameter, left + right);

            return 1 + Math.max(left, right);
        };

        dfs(root);
        return diameter;
    }
}