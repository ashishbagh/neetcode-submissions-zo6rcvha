class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let far = 0;
        let right=0;
        let jumps=0;

        
        
        for(let i=0;i<nums.length-1;i++){
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
