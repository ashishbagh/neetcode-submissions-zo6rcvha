class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
      let map= new Map();
      for(let i=0;i<=nums.length;i++){
          map.set(nums[i],nums[i]);
      }
      //console.log(map);
      for(let i=0;i<=nums.length;i++){
        if(map.get(i) === undefined){
          return i;
        }
      }
    }
}
