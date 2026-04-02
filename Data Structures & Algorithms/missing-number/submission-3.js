class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
      let map= new Map();
      let result=nums.length;
      // for(let i=0;i<=nums.length;i++){
      //     map.set(nums[i],nums[i]);
      // }
    
      // for(let i=0;i<=nums.length;i++){
      //   if(map.get(i) === undefined){
      //     return i;
      //   }
      // }

      for(let i=0;i<nums.length;i++){
          result^= i^nums[i];
      }
      return result;

    }
}
