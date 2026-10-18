/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const created = new Map();

        function helper(node) {
            if (created.has(node)) {
                return created.get(node);
            }

            const copy = new Node(node.val);
            created.set(node, copy);

            for (const n of node.neighbors) {
                copy.neighbors.push(helper(n));
            }

            return copy;
        }

        return helper(node);
    }
}
