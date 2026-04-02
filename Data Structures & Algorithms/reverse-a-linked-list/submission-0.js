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
      let LL=head.next;
      let oCurrentNode = new ListNode(head.val);

      while(LL !== null){
         let temp = oCurrentNode;
         oCurrentNode = new ListNode(LL.val);
        // console.log(oCurrentNode,temp);
         oCurrentNode.next=temp;
         LL = LL.next;
      }
      return oCurrentNode;
    }
}
