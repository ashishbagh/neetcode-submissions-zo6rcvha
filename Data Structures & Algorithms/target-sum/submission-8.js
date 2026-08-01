class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let memo = new Map();
       const dfs = (i,sum)=>{
             let key = `${i},${sum}`;
            if(memo.has(key)) return memo.get(key);
            if(i>=nums.length){
                if(sum===target) return 1;
                else return 0;
            }
         let ways =  dfs(i+1, sum+nums[i]) + dfs(i+1, sum-nums[i]);
         memo.set(key,ways);
         return ways;
       }

      return dfs(0,0);
    }
}
