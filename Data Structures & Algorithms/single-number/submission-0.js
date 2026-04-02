class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
      let XOR=nums[0];
      for(let i=1;i<nums.length;i++){
        XOR = XOR ^ nums[i];
      }

      return XOR;
    }
}
