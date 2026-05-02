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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let counter=[k];
        let res="";
       const dfs=(root,counter)=>{
            if(!root){
                return null;
            }

            dfs(root.left,counter);
            counter[0]--;
            if(counter[0]===0){
                res=root.val;
                return 
            };
            dfs(root.right,counter);
        }
        

       dfs(root,counter);
       return res;
    }
}
