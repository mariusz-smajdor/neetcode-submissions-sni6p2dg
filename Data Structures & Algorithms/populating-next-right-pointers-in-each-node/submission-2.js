/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        let queue = [root];

        while (queue.length) {
            const newQueue = [];

            for (let i = 0; i < queue.length; i++) {
                const node = queue[i];
                if (i + 1 !== queue.length) node.next = queue[i + 1] || null;
                if (node?.left) newQueue.push(node.left);
                if (node?.right) newQueue.push(node.right);
            }

            queue = newQueue;
        }

        return root;
    }
}
