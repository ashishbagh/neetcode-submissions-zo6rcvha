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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
      let oCurrent = head;
      let count=0;
      while(oCurrent !== null){
        count+=1;
        oCurrent=oCurrent.next;
      }

      let remove = count-n;
      if(count ===1 && remove===0){
        return null;
      }
        count=0;
       let prev=null;
        oCurrent=head;
      while(oCurrent !== null){
        if(count===remove){
          if( prev!==null){
            prev.next = oCurrent.next;
          }else{
            head = oCurrent.next;
          }
          console.log(prev);
          break;
        }
        prev = oCurrent;
        oCurrent=oCurrent.next;
        count+=1;
      }
      return head;
    }
}
