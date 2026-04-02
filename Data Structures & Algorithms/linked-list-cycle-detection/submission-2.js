/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
      let map=new Set();
      while(head !== null){
        if(!map.has(head)){
            map.add(head);
        }else{
          return true;
        }
        head = head.next;
      }

      return false;
    }
}
