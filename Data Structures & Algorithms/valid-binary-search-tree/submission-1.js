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
 isValidBST(root){
	function dfs(node, min, max) {
		if (!node) return true;
		if (node.val <= min || node.val >= max) return false;
		const isLeftTreeValid = dfs(node.left, min, node.val);
		const isRightTreeValid = dfs(node.right, node.val, max);
		return isLeftTreeValid && isRightTreeValid;
}

return dfs(root, -Infinity, +Infinity)
}

}
