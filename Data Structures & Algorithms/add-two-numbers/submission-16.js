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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0, null)
        let tmp = dummy
        let rest = 0

        while (l1 || l2) {
            const l1Val = l1?.val || 0
            const l2Val = l2?.val || 0
            tmp.next = new ListNode(0, null)
            tmp = tmp.next
            tmp.val = (rest + l1Val + l2Val) % 10

            rest = Math.floor((rest + l1Val + l2Val) / 10)

            if (l1)
                l1 = l1.next
            if (l2)
                l2 = l2.next
        }
        if (rest) {
            tmp.next = new ListNode(rest, null)
        }

        return dummy.next
    }
}
