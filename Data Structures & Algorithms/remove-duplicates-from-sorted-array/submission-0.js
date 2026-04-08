class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
      //. [1,1,2,3,4];
      let l=1;

      for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
            
            nums[l++]= nums[i]
        }
      }

     // console.log(nums);
      return l;

    }
}
