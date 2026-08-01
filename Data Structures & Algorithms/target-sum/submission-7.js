class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
    
       const dfs = (i,sum)=>{
            if(i>=nums.length){
            if(sum===target) return 1;
            else return 0;
            }
          
         let ways =  dfs(i+1, sum+nums[i]) + dfs(i+1, sum-nums[i])
         return ways;
       }

      return dfs(0,0);
    }
}
