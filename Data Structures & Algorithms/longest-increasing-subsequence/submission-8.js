class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
     
     let n = nums.length;
     let memo = new Array(n).fill(-1);
    

     const dfs = (i)=>{
      if(memo[i] !== -1) return memo[i];
      let count =1;
      for(let j = i + 1; j < n; j++){
            if (nums[i] < nums[j]) {
              count = Math.max(count,1+dfs(j));
            }
      }
      memo[i] = count;
      return count;
     }
     return Math.max(...nums.map((_, i) => dfs(i)));

    }
}
