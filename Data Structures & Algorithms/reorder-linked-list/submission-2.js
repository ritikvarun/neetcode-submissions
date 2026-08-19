class Solution {
    reorderList(head) {

        // Step 1: Find middle
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse second half
        let second = slow.next;
        slow.next = null;

        let prev = null;

        while (second !== null) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        // Step 3: Merge both halves
        let first = head;
        second = prev;

        while (second !== null) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}