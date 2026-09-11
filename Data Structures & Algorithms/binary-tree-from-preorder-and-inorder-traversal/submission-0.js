class Solution {
    buildTree(preorder, inorder) {
        let map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        let preIndex = 0;

        const dfs = (left, right) => {
            if (left > right) return null;

            let rootValue = preorder[preIndex++];
            let root = new TreeNode(rootValue);

            let mid = map.get(rootValue);

            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);

            return root;
        };

        return dfs(0, inorder.length - 1);
    }
}
