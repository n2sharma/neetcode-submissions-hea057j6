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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        const result = [];
        const queue = [root];
        while(queue.length > 0){
            const valsInEachLevel = []
            const noOfNodesinEachLevel = queue.length;
            for(let i = 0; i < noOfNodesinEachLevel; i++){
                const node = queue.shift();
                valsInEachLevel.push(node.val);
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
            result.push(valsInEachLevel);
        }
        return result;
    }
}
