class Solution {
    rightSideView(root) {
        if (root === null) return [];

        let result = [];
        let queue = [root];

        while (queue.length > 0) {
            let levelSize = queue.length;

            for (let i = 0; i < levelSize; i++) {
                let node = queue.shift();

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);

                if (i === levelSize - 1) {
                    result.push(node.val);
                }
            }
        }

        return result;
    }
}