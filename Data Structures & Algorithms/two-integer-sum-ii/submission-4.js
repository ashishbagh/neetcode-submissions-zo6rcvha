class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      let arr = numbers;
      let left =0;
      let right = arr.length-1;

       while(left<right){
          if(arr[left]+arr[right]<target){
            left++
          }else if(arr[left]+arr[right]>target){
            right--
          }else{
            return [left+1,right+1];
          }
        }

    }
}