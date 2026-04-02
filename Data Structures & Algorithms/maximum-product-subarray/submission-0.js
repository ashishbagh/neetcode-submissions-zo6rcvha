class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
     let min = 1;
     let max=1;
     let res = Math.max(...nums);
     for(let i=0;i<nums.length;i++){
      if(nums[i] ===0){
        min=1;
        max=1;
        continue;
      }
      let temp= min;
       min = Math.min(max*nums[i],min*nums[i],nums[i]);
       max = Math.max(max*nums[i],temp*nums[i],nums[i]);
      res = Math.max(max,res);
     }

     return res;
    }
}
