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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        return root
            ? (root.val >= low && root.val <= high ? root.val : 0) +
                  this.rangeSumBST(root.left, low, high) +
                  this.rangeSumBST(root.right, low, high)
            : 0;
    }
}
