class Solution {
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
        dummy.next = head;

        let fast = dummy;
        let slow = dummy;

        // Fast ko n+1 steps aage bhejo
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // Dono pointers saath chalao
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Nth node remove
        slow.next = slow.next.next;

        return dummy.next;
    }
}