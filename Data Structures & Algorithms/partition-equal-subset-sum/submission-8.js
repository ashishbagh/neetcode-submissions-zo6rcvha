class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((a,b)=>a+b,0);
        if(sum%2 !== 0) return false;
        let target = Math.floor(sum/2);
        let count=0;
        let set = new Set();
        const dfs = (l,amount)=>{
            let key = `${l},${amount}`;
            if(set.has(key) || set.has(count)) return;
            if(target===amount){
                count++;
                set.add(count)
                return 1;
            }
            if(l>nums.length) return;
            if(target<amount) return;
           set.add(key);
          for(let i=l;i<nums.length;i++){
            dfs(i+1,amount+nums[i]);
          }

        
         return;
        }
        
        dfs(0,0)
        return count === 1;
    }
}
