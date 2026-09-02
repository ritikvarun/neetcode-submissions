class Solution {
    isSubtree(root, subRoot) {
        if (subRoot === null) return true;
        if (root === null) return false;

        if (this.isSame(root, subRoot)) {
            return true;
        }

        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }

    isSame(p, q) {
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;

        return (
            this.isSame(p.left, q.left) &&
            this.isSame(p.right, q.right)
        );
    }
}