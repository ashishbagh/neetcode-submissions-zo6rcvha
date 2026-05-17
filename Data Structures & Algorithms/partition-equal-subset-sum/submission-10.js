class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((a,b)=>a+b,0);
        if(sum%2 !== 0) return false;
        let target = Math.floor(sum/2);
        let memo = new Map();
        const dfs = (i,amount)=>{
            let key = `${i},${amount}`;
            if(memo.has(key)) return memo.get(key);
            if(target===amount) return true;
            if(i>nums.length || target<amount ) return false;
            let ans =  dfs(i+1,amount+nums[i]) ||  dfs(i+1,amount);
            memo.set(key,ans);
            return ans;
        }
        
        return dfs(0,0);
    }
}
