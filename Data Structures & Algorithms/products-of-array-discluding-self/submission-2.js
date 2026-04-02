class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let prefix = 1;
      let result =[];

      for(let i=0;i<nums.length;i++){
        result[i] = prefix;
        prefix = prefix*nums[i];
      }
      let post=1;
      for(let i=result.length-1;i>=0;i--){
        result[i] = post*result[i];
        post = post*nums[i];
      }

      return result;
    }
}
