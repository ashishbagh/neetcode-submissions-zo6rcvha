class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n,memo=new Map()) {
        if(n<=1){
            return 1;
        }

        if(memo.has(n)) return memo.get(n);

        memo.set(n,this.climbStairs(n-1,memo) + this.climbStairs(n-2,memo));
        return memo.get(n);
    }
}
