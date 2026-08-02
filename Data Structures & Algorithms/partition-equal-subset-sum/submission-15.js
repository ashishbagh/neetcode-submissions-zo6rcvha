class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((a,b)=>a+b,0);
        if(sum%2 !==0) return false;
        const memo = new Map();
        const subset = (i,target)=>{
           let key= `${i},${target}`;
           if(memo.has(key)) return memo.get(key);
           
           if(target === Math.floor(sum/2)){
            memo.set(key,true);
            return true;;
           }

           if(i>=nums.length) return false;
           if(target>Math.floor(sum/2)){
            memo.set(key,true);
            return false
            };

            let ans = subset(i+1,target+nums[i]) || subset(i+1,target)
            memo.set(key,ans);
           return ans;
        }
       return subset(0,0);
    }
}
