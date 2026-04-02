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
     * @return {ListNode}
     */
    reverseList(head) {
      if(head ===null || head.next === null){
        return head;
      }
      let oCurrentNode=head
      let prev=null;

      while(oCurrentNode !== null){
          let next = oCurrentNode.next;
          oCurrentNode.next=prev;
          prev = oCurrentNode;
          oCurrentNode = next;
      }
      return prev;
    }
}
