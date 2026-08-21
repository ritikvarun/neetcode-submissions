class Solution {
    copyRandomList(head) {
        if (head === null) return null;

        let map = new Map();

        // Step 1: Create copy of every node
        let curr = head;
        while (curr !== null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // Step 2: Connect next & random pointers
        curr = head;
        while (curr !== null) {
            let copy = map.get(curr);

            copy.next = map.get(curr.next) || null;
            copy.random = map.get(curr.random) || null;

            curr = curr.next;
        }

        return map.get(head);
    }
}