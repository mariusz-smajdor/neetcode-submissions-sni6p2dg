/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        if (!root) return [];
        const result = [];
        function dfs(node) {
            for (const child of node.children) {
                if (child) dfs(child);
            }
            result.push(node.val);
        }
        dfs(root);
        return result;
    }
}
