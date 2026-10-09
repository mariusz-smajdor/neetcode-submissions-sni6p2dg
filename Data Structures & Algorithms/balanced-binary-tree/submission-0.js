/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;

        let result = true;

        function dfs(node) {
            const left = node.left ? dfs(node.left) : 0;
            const right = node.right ? dfs(node.right) : 0;

            if (Math.abs(left - right) > 1) result = false;

            return 1 + Math.max(left, right);
        }

        dfs(root);

        return result;
    }
}
