/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const visit = new Map();
        const dfs=(node)=>{
            if(node === null){
                return null;
             }
            if(!visit.has(node)){
                const root = new Node(node.val);
                visit.set(node,root);
                for(const neighbor of node.neighbors){
                 root.neighbors.push(dfs(neighbor));
                }

                return root;
            }else{
                return visit.get(node);
            }
            
         }
        return dfs(node);
    }
}
