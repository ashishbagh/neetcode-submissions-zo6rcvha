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

   DFS(root){
      if (!root){
         return [true,0];
      }

      let left = this.DFS(root.left);
      let right = this.DFS(root.right);

     let  isBalanced = left[0] && right[0] && Math.abs(left[1]-right[1])<=1;

     return [isBalanced,1+ Math.max(left[1],right[1])];
   }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

      
      return this.DFS(root)[0];
    }


    
}
