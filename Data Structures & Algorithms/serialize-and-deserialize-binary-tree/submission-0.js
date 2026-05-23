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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = [];

        const dfs=(node)=>{
            if(!node){
               result.push("N");
               return 
            }

            result.push(node.val);
            dfs(node.left);
            dfs(node.right);
            return;
        }

        dfs(root);
        console.log(result.join(","));
        return result.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
       let result = data.split(",");
       let i=0;
        const dfs=()=>{
            if(result[i] === "N"){
                i++;
                return null;
            }
            let root = new TreeNode(result[i]);
            i++
            root.left = dfs();
            root.right = dfs();

            return root;
        }

        return dfs(0);

    }
}
