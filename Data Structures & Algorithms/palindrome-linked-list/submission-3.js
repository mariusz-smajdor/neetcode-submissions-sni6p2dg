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
    isPalindrome(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        if (fast) {
            slow = slow.next;
        }

        let prev = null;
        while (slow) {
            const next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }

        let start = head;
        let end = prev;
        while (end) {
            if (start.val !== end.val) {
                return false;
            }
            start = start.next;
            end = end.next;
        }

        return true;
    }
}
