/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = dummy;
        let count = 0;

        while (fast.next) {
            fast = fast.next;
            if (count < n) {
                count++;
            } else {
                slow = slow.next;
            }
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}
