class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
      let XOR;
      for(let i=0;i<nums.length;i++){
        XOR ^= nums[i];
      }
      return XOR;
    }
}
