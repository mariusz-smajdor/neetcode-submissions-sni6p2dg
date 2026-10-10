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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        function dfs(n1, n2) {
            if (!n1 && !n2) return null;

            const val = (n1?.val || 0) + (n2?.val || 0);
            const node = new TreeNode(val);
            node.left = dfs(n1?.left || null, n2?.left || null);
            node.right = dfs(n1?.right || null, n2?.right || null);

            return node;
        }

        return dfs(root1, root2);
    }
}
