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
        let tmp = head
        let arr = []
    
        while (tmp) {
            arr.push(tmp.val)
            tmp = tmp.next
        }

        const n = arr.length
        for (let i = 0; i < n; i++) {
            if (arr[i] !== arr[n - i - 1]) return false
        }
 
        return true
    }
}
