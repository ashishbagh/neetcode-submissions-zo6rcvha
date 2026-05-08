class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let memo = new Map();
      const dfs = (i,buying)=>{
        if(i>=prices.length){
            return 0;
        }
        let key=`${i},${buying}`;
        if(memo.has(key)) return memo.get(key);
        let cooldown =  dfs(i + 1, buying);
        let ans;
        if(buying){
            let buy = dfs(i+1,!buying)-prices[i];
            ans = Math.max(buy,cooldown);
        }else{
            let sell = dfs(i+2,!buying)+prices[i];
            ans = Math.max(sell,cooldown);
        }
        memo.set(key,ans);
        return ans;
      }
      return dfs(0,true)
    }
}
