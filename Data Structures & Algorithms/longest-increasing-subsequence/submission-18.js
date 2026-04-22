class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        const memo={};
       const dfs = (i)=>{
            if(i>nums.length) return 0;
            if(memo[i]) return memo[i];
            let count=1;
            for(let j=i+1;j<nums.length;j++){
                if(nums[j]>nums[i]){
                    count= Math.max(count,1+dfs(j))
                }
            }
            memo[i]=count
        return count;
       }
       
       return Math.max(...nums.map((_,index)=>dfs(index)));
    }
}
