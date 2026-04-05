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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next) return false
        let one = head
        let two = head.next

        while (one && two) {
            if (one.val === two.val) {
                return true
            }
            if (!two.next || !two.next.next || !one.next) {
                return false
            }
            one = one.next
            two = two.next.next
        }

        return false
    }
}
