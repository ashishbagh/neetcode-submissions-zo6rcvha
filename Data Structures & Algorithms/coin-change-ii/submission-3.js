class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
      let cache = {};
      
      const dfs = (target,left)=>{
         if(target===amount) return 1;
        if(target>amount) return 0;

        if(left>=coins.length) return 0;

        let key=`${target}${left}`
        if(cache[key] !== undefined) return cache[key];

       // for(let i=left;i<coins.length;i++){
         // let tempKey=`${target}${left}`
        cache[key]= dfs(target+coins[left],left)+dfs(target,left+1);
       // }
        return cache[key];
      }

      return dfs(0,0)
    }
}
