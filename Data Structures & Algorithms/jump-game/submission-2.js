class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
       let max = 0;
       let right=0;
       let jumps=0;

       for(let i=0;i<nums.length;i++){
        max = Math.max(nums[i]+i,max);
        if(right===i){
            right=max;
            jumps++;
            if(right>=nums.length-1) return true;
        }
       }

       return false;
    }
}
