class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
      if(n===0){
        return [0];
      }
      let dp = Array(n).fill(0);
      let offset=1;
      for(let i=1;i<=n;i++){
          if(offset*2 === i){
              offset=i
          }
          dp[i] = 1+ dp[i-offset]
      }
     return dp
    }
}
