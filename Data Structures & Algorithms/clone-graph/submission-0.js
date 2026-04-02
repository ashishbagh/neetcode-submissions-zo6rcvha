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
      if(node === null){
        return null;
      }
      
    
      let map = new Map();

      let clone = (node)=>{
         if(!map.get(node)){
           let copy = new Node(node.val);
           map.set(node,copy);
           let arr = node.neighbors;
           for(let i=0;i<arr.length;i++){
            copy.neighbors.push(clone(arr[i]));
           }
           return copy
         }else{
            return map.get(node)
         }
      }
      

      return clone(node);
    }
}
