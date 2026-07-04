class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let memo = new Map();
      const dfs=(i,isBuying)=>{
        if(i>=prices.length) return 0;
        let key = `${i},${isBuying}`;
        if(memo.has(key)) return memo.get(key);
        let cooldown = dfs(i+1,isBuying);
        let ans=0;
        if(isBuying){
             ans = dfs(i+1,!isBuying) - prices[i];
        }else{
             ans = dfs(i+2,!isBuying) + prices[i];
        }
        ans  = Math.max(ans,cooldown);
        memo.set(key,ans);
        return ans;
      }

      return dfs(0,true)
    }
}
