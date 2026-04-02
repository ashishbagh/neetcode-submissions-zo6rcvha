class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, left=0,right=nums.length-1) {
      
      if(left>right){
        return -1;
      }
      
      let mid = parseInt((left+right)/2);

      if(nums[mid] === target){
        return mid;
      } else if(nums[mid]>target){
        return this.search(nums,target,left,mid-1);
      }else{
        return this.search(nums,target,mid+1,right);
      }

    }
}
