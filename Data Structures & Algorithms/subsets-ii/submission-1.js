class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
      
       let result=[]
       nums = nums.sort((a,b)=>a-b)
        
        const dfs=(subset,l)=>{
            if(l>nums.length) return
            result.push([...subset]);
            for(let i=l;i<nums.length;i++){
                if(i>l && nums[i] === nums[i-1]) continue;
                subset.push(nums[i]);
                dfs(subset,i+1);
                subset.pop();
            }
            return
        }
        dfs([],0);
        return result;
    }
}
