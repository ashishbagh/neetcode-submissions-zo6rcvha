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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

      let res=0;

      const dfs=(curr)=>{

        if(!curr){
          return 0;
        }

        let left = dfs(curr.left);
        let right = dfs(curr.right);
        res = Math.max(res,right+left);
        return 1+ Math.max(left,right);

      }
     
      dfs(root);

      return res;

    }
}
