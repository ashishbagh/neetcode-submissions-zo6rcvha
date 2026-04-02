class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
      let sum=0;
      let res=-Infinity;
      for(let i=0;i<nums.length;i++){
        if(nums[i]>sum+nums[i]){
          sum= nums[i];
        }else{
          sum = nums[i]+sum
        }
       res = Math.max(res,sum);
      }
      return res;
    }
}
