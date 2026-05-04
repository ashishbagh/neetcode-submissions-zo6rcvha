class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let map=new Map();
        const dfs=(target)=>{
         if(map.has(target)) return map.get(target);
         if(target===0) return 0;
         if(target<0) return Infinity;
         let minCoins=Infinity;
         for(const coin of coins){
            minCoins= Math.min(minCoins,1+dfs(target-coin));
         }

         map.set(target,minCoins);
         return minCoins;
        } 
      let result = dfs(amount);
      return result === Infinity ? -1 : result;
    }
}
