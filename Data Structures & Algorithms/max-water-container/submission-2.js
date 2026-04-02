class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      
      let arr=heights;
      let left=0;
      let right=arr.length-1;
      let maxOutput=0;
      while(left<right){
        let water = (right-left)*Math.min(arr[left],arr[right]);
        maxOutput = Math.max(water,maxOutput)
         if(arr[left]>arr[right]){
            right--;
         }else{
            left++;
         }
      }
     
      return maxOutput;
    }
}
