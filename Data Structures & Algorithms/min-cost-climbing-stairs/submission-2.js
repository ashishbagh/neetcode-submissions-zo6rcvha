class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
      
      let cache={};
      //cost.push(0);
      const dfs = (i)=>{
        if(i>=cost.length) return 0;

        if(cache[i] !== undefined){
           return cache[i];
        }
        let min = cost[i]+Math.min(dfs(i+1),dfs(i+2));
        cache[i] = min;
        return cache[i];
      }

      return Math.min(dfs(0),dfs(1));
    }
}
