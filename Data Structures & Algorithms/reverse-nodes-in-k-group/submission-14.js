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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let arr = [];

        let currentNode = head;

        while (currentNode !== null) {
            arr.push(currentNode);
            let tempNode = currentNode.next;
            currentNode.next = null;
            currentNode = tempNode;
        }

        const reverse = (left, right) => {
            while (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
            return;
        };
       
        let left=0;
         while(left+k-1<arr.length){
          reverse(left,left+k-1);
          left = left+k;
         }

        let dummyNode = new ListNode();
        currentNode = dummyNode;
        while (arr.length !== 0) {
            currentNode.next = arr.shift();
            currentNode = currentNode.next;
        }
        return dummyNode.next;

    }

}




