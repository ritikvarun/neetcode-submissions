class Solution {
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry) {

            let x = l1 ? l1.val : 0;
            let y = l2 ? l2.val : 0;

            let sum = x + y + carry;
            carry = Math.floor(sum / 10);

            current.next = new ListNode(sum % 10);

            current = current.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}
