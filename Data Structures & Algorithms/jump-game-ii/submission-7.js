class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let far = 0;
        let right=0;
        let jumps=0;

        if (nums[0] === 0 || nums.length === 1 ) {
           return 0;
         }
        
        for(let i=0;i<nums.length;i++){
            far = Math.max(nums[i]+i,far);
            if(right===i){
                right=far;
                jumps++;
                if(right>=nums.length-1) return jumps; 
            }
        }

        return jumps;
    }
}
