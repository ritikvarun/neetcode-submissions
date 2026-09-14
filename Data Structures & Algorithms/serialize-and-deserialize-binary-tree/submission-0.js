/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val, left, right) {
 *         this.val = val;
 *         this.left = left || null;
 *         this.right = right || null;
 *     }
 * }
 */

class Codec {

    serialize(root) {
        let result = [];

        const dfs = (node) => {
            if (node === null) {
                result.push("N");
                return;
            }

            result.push(String(node.val));

            dfs(node.left);
            dfs(node.right);
        };

        dfs(root);

        return result.join(",");
    }

    deserialize(data) {
        let values = data.split(",");
        let index = 0;

        const dfs = () => {
            if (values[index] === "N") {
                index++;
                return null;
            }

            let node = new TreeNode(Number(values[index]));
            index++;

            node.left = dfs();
            node.right = dfs();

            return node;
        };

        return dfs();
    }
}